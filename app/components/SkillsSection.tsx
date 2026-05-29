'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: '☁️ Cloud Infrastructure',
      skills: ['GKE Autopilot & GKE 1.27+', 'AWS ECS Fargate & Lambda', 'Hybrid/Multi-Cloud Architectures', 'Next.js & Vercel Edge'],
    },
    {
      title: '🤖 Agentic AI Governance',
      skills: ['OPA/Rego Policy-as-Code', 'Fiscal SecOps & Circuit Breakers', 'Real-time Token Budgeting', 'Autonomous Remediation'],
    },
    {
      title: '🛡️ Reliability & Security',
      skills: ['Incident Investigation (RCA)', 'RTO/RPO Validation', 'Keyless WIF/OIDC Auth', 'Supply Chain Security (Trivy)'],
    },
    {
      title: '🏗️ IaC & Automation',
      skills: ['Terraform 1.7 (Modular)', 'GitHub Actions (Event-Driven)', 'AsyncIO Python Development', 'GitOps Patterns'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Architectural Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((cat, idx) => (
            // Added unique key based on index
            <div key={`cat-${idx}`} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-bold text-blue-400 mb-4">{cat.title}</h3>
              <ul className="space-y-2">
                {cat.skills.map((s, i) => (
                  // Added unique key combining category index and skill index
                  <li key={`skill-${idx}-${i}`} className="text-gray-300 text-sm flex gap-2">
                    <span>✓</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}