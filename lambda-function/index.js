'use strict';

const { SESClient, SendEmailCommand } = require('@aws-sdk/client-ses');
const ses = new SESClient({ region: process.env.AWS_REGION || 'us-east-1' });

const FROM_EMAIL = process.env.SES_FROM_EMAIL;
const TO_EMAIL   = process.env.SES_TO_EMAIL;
const ALLOWED_ORIGINS = new Set([
  'https://brian-lasky.com',
  'https://www.brian-lasky.com',
]);

const LIMITS = {
  name:    { min: 1, max: 100 },
  email:   { min: 5, max: 254 },
  message: { min: 1, max: 5000 },
};

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;

function sanitize(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/\0/g, '').trim();
}

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.has(origin) ? origin : 'https://brian-lasky.com';
  return {
    'Access-Control-Allow-Origin':  allowed,
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Vary': 'Origin',
  };
}

function respond(statusCode, body, origin) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
    body: JSON.stringify(body),
  };
}

function validate(fields) {
  const errors = [];
  for (const [field, value] of Object.entries(fields)) {
    const { min, max } = LIMITS[field];
    if (!value || value.length < min) errors.push(field + ' is required');
    else if (value.length > max)      errors.push(field + ' exceeds ' + max + ' characters');
  }
  if (fields.email && !EMAIL_RE.test(fields.email)) errors.push('email format is invalid');
  return errors;
}

exports.handler = async (event) => {
  const origin = (event.headers && (event.headers['origin'] || event.headers['Origin'])) || '';

  if (event.requestContext?.http?.method === 'OPTIONS' || event.httpMethod === 'OPTIONS') {
    return respond(204, {}, origin);
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch (e) {
    return respond(400, { message: 'Invalid JSON' }, origin);
  }

  const name    = sanitize(body.name);
  const email   = sanitize(body.email);
  const message = sanitize(body.message);

  const errors = validate({ name, email, message });
  if (errors.length) return respond(400, { message: errors[0] }, origin);

  const command = new SendEmailCommand({
    Source: FROM_EMAIL,
    Destination: { ToAddresses: [TO_EMAIL] },
    Message: {
      Subject: { Data: 'Portfolio contact from ' + name },
      Body: { Text: { Data: 'Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message } },
    },
    ReplyToAddresses: [email],
  });

  try {
    await ses.send(command);
    return respond(200, { message: 'Message sent successfully' }, origin);
  } catch (err) {
    console.error('SES error:', err);
    return respond(500, { message: 'Failed to send message' }, origin);
  }
};
