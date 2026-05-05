'use client';

import { useState, useEffect } from 'react';

const LIMITS = {
  name:    { min: 1,  max: 100  },
  email:   { min: 5,  max: 254  },
  message: { min: 1,  max: 5000 },
} as const;

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

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
  );
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
        console.error('Contact form HTTP error:', response.status);
        throw new Error('non-2xx');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);

    } catch {
      setStatus('error');
      setErrorMsg(GENERIC_ERROR);
    }
  };

  if (!isClient) {
    return (
      <section id="contact" className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="h-8 bg-gray-700 rounded w-48 mb-8 animate-pulse mx-auto" />
          <div className="space-y-4">
            <div className="h-10 bg-gray-700 rounded animate-pulse" />
            <div className="h-10 bg-gray-700 rounded animate-pulse" />
            <div className="h-32 bg-gray-700 rounded animate-pulse" />
            <div className="h-10 bg-gray-700 rounded animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Get In Touch
        </h2>

        {status === 'success' && (
          <div className="mb-4 p-4 bg-green-800 text-green-100 rounded">
            Message sent! I&apos;ll get back to you soon.
          </div>
        )}

        {status === 'error' && errorMsg && (
          <div className="mb-4 p-4 bg-red-800 text-red-100 rounded">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={LIMITS.name.max}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={LIMITS.email.max}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={LIMITS.message.max}
              className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {status === 'loading' && <Spinner />}
            {status === 'loading' ? 'Sending…' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
