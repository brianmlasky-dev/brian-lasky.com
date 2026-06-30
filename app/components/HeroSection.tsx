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
          className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Brian Lasky <span className="block text-xl md:text-3xl text-blue-400 mt-2 font-medium">Platform Engineer | AI Infrastructure & Kubernetes</span>
        </h1>

        {/* Tagline & Availability */}
        <div
          className={`mb-8 transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg md:text-xl text-gray-300 mb-2">
            Kubernetes Governance · Fiscal SecOps · Multi-Cloud Resilience
          </p>
          <p className="text-sm font-semibold text-blue-400/80 uppercase tracking-wider bg-blue-950/40 inline-block px-4 py-1.5 rounded-full border border-blue-900/50">
            Available Immediately for Remote Roles (US)
          </p>
        </div>

        {/* Description */}
        <p
          className={`text-lg text-gray-400 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          I engineer fail-closed control planes and policy-driven infrastructure on Kubernetes. I specialize in building deterministic guardrails that protect enterprise budgets and secure autonomous AI workloads at production scale.
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
          Infrastructure-as-Code: Managed via Terraform and governed through Kubernetes admission controls.
        </p>
      </div>
    </section>
  );
}