import React from 'react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 text-white">
      <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>
      
      {/* Resilience Control Plane */}
      <div className="mb-12 bg-gray-900 p-8 rounded-lg border border-blue-500/30">
        <h3 className="text-2xl font-bold mb-2 text-blue-400">Resilience Control Plane (RCP)</h3>
        <p className="text-gray-400 mb-4 italic">Governance middleware for autonomous agentic AI workloads.</p>
        <div className="space-y-4 text-gray-300">
          <p><strong>The Challenge:</strong> Securing high-stakes financial LLM workloads against runaway compute costs and "reasoning drift."</p>
          <p><strong>The Solution:</strong> Architected a deterministic, policy-driven "fail-closed" gateway using OPA/Rego to enforce fiscal budgets pre-execution.</p>
          <p><strong>Impact:</strong> Mitigated $250,000+ potential financial exposure per incident through autonomous, policy-based circuit breaking.</p>
          <div className="flex gap-4 pt-2">
            <a href="https://github.com/brianmlasky/resilience-control-plane" className="text-blue-400 hover:underline">View GitHub Repo →</a>
            <a href="https://github.com/brianmlasky/resilience-control-plane/blob/main/docs/adr/0000-traceability-matrix.md" className="text-blue-400 hover:underline">Read Traceability Matrix →</a>
          </div>
        </div>
      </div>

      {/* Multi-Cloud DR */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-white">Multi-Cloud Disaster Recovery (DR) Platform</h3>
        <div className="space-y-4 text-gray-300">
          <p><strong>The Challenge:</strong> Achieving high-availability across cloud boundaries with near-zero RTO/RPO.</p>
          <p><strong>The Solution:</strong> Architected active-passive redundancy between AWS and GCP using Terraform for environment parity and automated DNS failover.</p>
          <p><strong>Governance:</strong> Implemented automated resource tagging and secondary-cluster teardown, reducing idle cloud spend by 30%.</p>
        </div>
      </div>
    </section>
  );
}