'use strict';

const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: process.env.AWS_REGION || 'us-east-1' });

// ── constants ────────────────────────────────────────────────────────────────
const FROM_EMAIL = process.env.SES_FROM_EMAIL;
const TO_EMAIL   = process.env.SES_TO_EMAIL;

const LIMITS = {
  name:    { min: 1, max: 100 },
  email:   { min: 5, max: 254 },
  message: { min: 1, max: 5000 },
};

// RFC-5321 compatible, intentionally simple — no Unicode tricks
const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

// ── helpers ──────────────────────────────────────────────────────────────────

/**
 * Strip characters that have no place in plain-text form fields.
 * Removes null bytes and trims whitespace; does NOT HTML-encode
 * because we send plain-text email only.
 */
function sanitize(value) {
  return String(value).replace(/\0/g, '').trim();
}

function validate({ name, email, message }) {
  const errors = [];

  if (!name || name.length < LIMITS.name.min || name.length > LIMITS.name.max) {
    errors.push(`name must be 1–${LIMITS.name.max} characters`);
  }

  if (!email ||
      email.length < LIMITS.email.min ||
      email.length > LIMITS.email.max ||
      !EMAIL_RE.test(email)) {
    errors.push('email must be a valid address (max 254 chars)');
  }

  if (!message ||
      message.length < LIMITS.message.min ||
      message.length > LIMITS.message.max) {
    errors.push(`message must be 1–${LIMITS.message.max} characters`);
  }

  return errors;
}

function buildResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'X-Content-Type-Options': 'nosniff',
    },
    body: JSON.stringify(body),
  };
}

// ── handler ──────────────────────────────────────────────────────────────────
exports.handler = async (event) => {
  console.log('INVOKED requestId=%s', event.requestContext?.requestId ?? 'local');

  // ── env guard ──────────────────────────────────────────────────────────────
  if (!FROM_EMAIL || !TO_EMAIL) {
    console.error('Missing SES_FROM_EMAIL or SES_TO_EMAIL environment variables');
    return buildResponse(500, { error: 'Server misconfiguration' });
  }

  // ── parse body ─────────────────────────────────────────────────────────────
  let raw;
  try {
    if (typeof event.body === 'string') {
      raw = JSON.parse(event.body);
    } else if (typeof event.body === 'object' && event.body !== null) {
      raw = event.body;
    } else {
      raw = event; // local test invocation
    }
  } catch {
    return buildResponse(400, { error: 'Invalid JSON body' });
  }

  // ── sanitize ───────────────────────────────────────────────────────────────
  const fields = {
    name:    sanitize(raw.name    ?? ''),
    email:   sanitize(raw.email   ?? ''),
    message: sanitize(raw.message ?? ''),
  };

  // ── validate ───────────────────────────────────────────────────────────────
  const errors = validate(fields);
  if (errors.length > 0) {
    console.log('Validation failed: %j', errors);
    return buildResponse(400, { error: 'Validation failed', details: errors });
  }

  // ── send email ─────────────────────────────────────────────────────────────
  const params = {
    Source: FROM_EMAIL,
    Destination: { ToAddresses: [TO_EMAIL] },
    ReplyToAddresses: [fields.email],
    Message: {
      Subject: {
        Data: `Contact form: ${fields.name}`,
      },
      Body: {
        Text: {
          Data: [
            `Name:    ${fields.name}`,
            `Email:   ${fields.email}`,
            `Message:`,
            ``,
            fields.message,
          ].join('\n'),
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('Email sent MessageId=%s', result.MessageId);
    return buildResponse(200, { message: 'Message sent successfully' });
  } catch (err) {
    // Log the real error internally; never forward it to the caller
    console.error('SES error code=%s message=%s', err.code, err.message);
    return buildResponse(500, { error: 'Failed to send message. Please try again.' });
  }
};
