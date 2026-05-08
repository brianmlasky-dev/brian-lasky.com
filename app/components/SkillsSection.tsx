'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: '☁️ Cloud Platforms',
      skills: [
        'AWS — ECS Fargate, Lambda, RDS PostgreSQL, DynamoDB, Route53, S3, API Gateway, SES, CloudWatch, SNS, IAM',
        'Google Cloud — Cloud Run, GKE Autopilot, Cloud SQL, GCS, Pub/Sub, Cloud Monitoring, Secret Manager, IAM',
        'Vercel — Next.js deployment and edge config',
      ],
    },
    {
      title: '🏗️ Infrastructure as Code',
      skills: [
        'Terraform 1.7 — modules, workspaces, remote state',
        'HCL — variables, locals, outputs, data sources',
        'S3 + DynamoDB state backend with locking',
        'Terraform Cloud / CLI-driven workflows',
      ],
    },
    {
      title: '🚀 CI/CD & Automation',
      skills: [
        'GitHub Actions — event-driven pipelines',
        'OIDC federation — keyless AWS authentication',
        'Automated terraform plan/apply on merge',
        'Bash scripting for deployment automation',
      ],
    },
    {
      title: '🔒 Security',
      skills: [
        'Least-privilege IAM — roles, policies, boundaries',
        'OIDC — no long-lived credentials in CI',
        'DKIM, SPF, DMARC — email authentication',
        'HTTPS / TLS — enforced at infrastructure level',
      ],
    },
    {
      title: '📊 Monitoring & Observability',
      skills: [
        'CloudWatch — alarms for 4xx, 5xx, Lambda errors',
        'SNS — alert routing and subscriptions',
        'SES bounce/complaint monitoring',
        'Structured log analysis',
      ],
    },
    {
      title: '🛠️ Languages & Tooling',
      skills: [
        'TypeScript / Next.js — production frontend',
        'Python (Flask) — API and Lambda development',
        'Bash — deployment and failover scripting',
        'Docker — containerized service packaging',
        'Git — branching, PRs, version control',
      ],
    },
  ];

  const certifications = [
    {
      provider: 'AWS',
      gradient: 'from-orange-600 to-orange-700',
      textMuted: 'text-orange-100',
      emoji: '🏆',
      name: 'Solutions Architect – Associate',
      issued: 'Issued Apr 14, 2026 · Expires Apr 14, 2029',
      credentialId: 'f2bc69a180854cba9361f9a96658d25a',
      verifyUrl: 'https://aws.amazon.com/verification',
      status: 'Active',
    },
    {
      provider: 'Google Cloud',
      gradient: 'from-blue-600 to-blue-700',
      textMuted: 'text-blue-100',
      emoji: '🏆',
      name: 'Professional Cloud Architect',
      issued: 'Issued Apr 2026 · Expires Apr 2028',
      credentialId: '009a2dd92d044676b1eb1246d3ff36a0',
      verifyUrl: 'https://www.credly.com/badges/efa6ff9f-1609-43c8-963a-9d9924a24423',
      status: 'Active',
    },
    {
      provider: 'CompTIA',
      gradient: 'from-gray-600 to-gray-700',
      textMuted: 'text-gray-300',
      emoji: '📋',
      name: 'Security+',
      issued: 'Target: August 2026',
      credentialId: null,
      verifyUrl: null,
      status: 'In Progress',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Skills built through production deployments — every item below is
          running or version-controlled in this portfolio
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="text-gray-300 flex items-start gap-2 text-sm"
                  >
                    <span className="text-blue-400 mt-0.5 shrink-0">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${cert.gradient} p-6 rounded-lg text-white flex flex-col gap-2`}
              >
                {/* Provider + Status Badge */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">
                    {cert.emoji} {cert.provider}
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded font-semibold ${
                      cert.status === 'Active'
                        ? 'bg-green-800 text-green-300'
                        : 'bg-yellow-800 text-yellow-300'
                    }`}
                  >
                    {cert.status}
                  </span>
                </div>

                {/* Cert Name */}
                <div className="text-base font-semibold">{cert.name}</div>

                {/* Issued / Expiry */}
                <div className={`text-sm ${cert.textMuted}`}>
                  {cert.issued}
                </div>

                {/* Credential ID */}
                {cert.credentialId && (
                  <div className={`text-xs ${cert.textMuted} font-mono break-all`}>
                    ID: {cert.credentialId}
                  </div>
                )}

                {/* Verify Link */}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm underline hover:opacity-80 transition-opacity"
                  >
                    {cert.provider === 'AWS'
                      ? 'Verify at aws.amazon.com/verification →'
                      : 'Verify Credential →'}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
