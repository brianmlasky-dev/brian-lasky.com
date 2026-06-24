'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

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
          Brian Lasky <span className="text-blue-400">Principal AI Infrastructure Architect</span>
        </h1>

        {/* Tagline & Geo-Signaling */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Agentic AI Infrastructure · Fiscal SecOps · Multi-Cloud DR
          </p>
          <p className="text-sm font-medium text-blue-400/80 uppercase tracking-wider">
            Open to Remote | San Jose, CA · Ridgefield, CT · Veneta, OR · Walton, KY
          </p>
        </div>

        {/* Description */}
        <p
          className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I architect fail-closed, policy-driven control planes to secure autonomous agentic workloads. I specialize in mitigating the financial and operational risks of AI at enterprise scale.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <Link
            href="/case-studies/sagc"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            View Governance Controller
          </Link>
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
        <p className={`mt-8 text-sm text-gray-500 italic transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Policy-as-Code: Enforced via OPA Gatekeeper and governed by Fiscal SecOps.
        </p>
      </div>
    </section>
  );
}
