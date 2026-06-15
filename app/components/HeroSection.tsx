'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Brian Lasky <span className="text-blue-400">Senior Platform Engineer | SRE</span>
        </h1>

        {/* Tagline */}
        <p
          className={`text-xl md:text-2xl text-gray-300 mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Agentic AI Infrastructure · Fiscal SecOps · Multi-Cloud DR
        </p>

        {/* Description */}
        <p
          className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I build and deploy audit-ready, policy-driven infrastructure to secure autonomous agentic workloads. Specializing in high-stakes infrastructure that balances AI innovation with rigorous operational reliability.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://github.com/brianmlasky/serverless-agentic-governance-controller"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            View Governance Controller
          </a>
          <a
            href="https://github.com/brianmlasky/serverless-agentic-governance-controller/tree/main/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 font-semibold rounded-lg transition-colors"
          >
            Read Technical Specs
          </a>
        </div>

        {/* Infrastructure Footnote */}
        <p className="mt-8 text-sm text-gray-500 italic">
          Policy-as-Code: Enforced via OPA Gatekeeper and governed by Fiscal SecOps.
        </p>

        {/* Scroll Indicator */}
        <div
          className={`mt-12 animate-bounce transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <svg
            className="w-6 h-6 mx-auto text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
