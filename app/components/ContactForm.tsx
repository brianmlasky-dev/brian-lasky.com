'use client';

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Hydration fix: only render form after client-side mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const response = await fetch(
        'https://4wuinyvkr0.execute-api.us-east-1.amazonaws.com/prod/contact',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('✓ Email sent:', data.messageId);
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('✗ Form submission failed:', error);
      setStatus('error');
      setErrorMsg(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

  // Prevent hydration mismatch by not rendering until client-side
  if (!isClient) {
    return (
      <form className="max-w-lg mx-auto p-6 border rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-10 bg-gray-300 rounded"></div>
          <div className="h-24 bg-gray-300 rounded"></div>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-900 border border-gray-700 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Get in Touch</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-100">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === 'loading'}
          placeholder="Your name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-100">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={status === 'loading'}
          placeholder="your@email.com"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text-gray-100">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          disabled={status === 'loading'}
          placeholder="Your message..."
        />
      </div>

      {status === 'success' && (
        <p className="text-green-400 mb-4">✓ Message sent! I'll get back to you soon.</p>
      )}

      {status === 'error' && (
        <p className="text-red-400 mb-4">✗ Error: {errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
