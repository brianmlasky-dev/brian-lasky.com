'use client';

import { useState, useEffect } from 'react';

// ── limits must mirror lambda-function/index.js LIMITS ──────────────────────
const LIMITS = {
  name:    { min: 1,  max: 100  },
  email:   { min: 5,  max: 254  },
  message: { min: 1,  max: 5000 },
} as const;

// Generic user-facing message — never forward raw HTTP/network errors
const GENERIC_ERROR = "Something went wrong. Please try again or email me directly.";

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  name:    string;
  email:   string;
  message: string;
}

function clientValidate(data: FormData): string | null {
  if (!data.name.trim() || data.name.length > LIMITS.name.max) {
    return `Name must be 1–${LIMITS.name.max} characters.`;
  }
  if (!data.email.trim() || data.email.length > LIMITS.email.max) {
    return `Email must be a valid address (max ${LIMITS.email.max} chars).`;
  }
  if (!data.message.trim() || data.message.length > LIMITS.message.max) {
    return `Message must be 1–${LIMITS.message.max} characters.`;
  }
  return null;
}

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [status,   setStatus]   = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => { setIsClient(true); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    // Client-side validation before touching the network
    const validationError = clientValidate(formData);
    if (validationError) {
      setStatus('error');
      setErrorMsg(validationError);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL!, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });

      if (!response.ok) {
        // Log status for debugging; show generic message to user
        console.error('Contact form HTTP error:', response.status);
        throw new Error('non-2xx');
      }

      console.log('Contact form submitted successfully');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);

    } catch {
      setStatus('error');
      setErrorMsg(GENERIC_ERROR);
    }
  };

  // ── skeleton (prevents hydration mismatch) ─────────────────────────────────
  if (!isClient) {
    return (
      <form className="max-w-lg mx-auto p-6 border rounded-lg" aria-busy="true">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-300 rounded" />
          <div className="h-10 bg-gray-300 rounded" />
          <div className="h-24 bg-gray-300 rounded" />
        </div>
      </form>
    );
  }

  const isLoading = status === 'loading';

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-gray-900 border border-gray-700 rounded-lg"
      noValidate
    >
      <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="cf-name" className="block text-sm font-medium mb-1 text-gray-100">
          Name
        </label>
        <input
          id="cf-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={LIMITS.name.max}
          disabled={isLoading}
          placeholder="Your name"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="cf-email" className="block text-sm font-medium mb-1 text-gray-100">
          Email
        </label>
        <input
          id="cf-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          maxLength={LIMITS.email.max}
          disabled={isLoading}
          placeholder="your@email.com"
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div className="mb-4">
        <label htmlFor="cf-message" className="block text-sm font-medium mb-1 text-gray-100">
          Message
        </label>
        <textarea
          id="cf-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={LIMITS.message.max}
          rows={4}
          disabled={isLoading}
          placeholder="Your message..."
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <p className="text-xs text-gray-500 mt-1 text-right">
          {formData.message.length} / {LIMITS.message.max}
        </p>
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <p role="status" className="text-green-400 mb-4">
          ✓ Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="text-red-400 mb-4">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
