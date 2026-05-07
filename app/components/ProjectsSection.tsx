'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Production Portfolio Platform',
      status: 'Live',
      description:
        'This site — a fully production-grade system provisioned entirely with Terraform. AWS infrastructure includes Route53 DNS, SES (production access, 50K msg/day), Lambda + API Gateway for the contact form, CloudWatch alarms, and SNS alerting. Deployed via GitHub Actions with OIDC authentication. Zero manual console work.',
      tech: [
        'Next.js',
        'TypeScript',
        'Terraform',
        'AWS Lambda',
        'API Gateway',
        'SES',
        'Route53',
        'CloudWatch',
        'GitHub Actions',
        'OIDC',
      ],
      link: 'https://github.com/brianmlasky/brian-lasky.com',
      linkLabel: 'View Repository →',
    },
    {
      title: 'Multi-Cloud DR Platform',
      status: 'Live — Simulation Mode',
      description:
        'Disaster recovery architecture spanning AWS ECS Fargate and GCP Cloud Run. Achieves RTO of 0s and RPO of 1s via automated DNS failover, cross-cloud database replication (RDS → S3 → GCS → Cloud SQL), and OIDC keyless authentication. Provisioned with Terraform 1.7.0. Infrastructure is fully deployed in simulation mode — a cost-conscious approach that preserves the full failover capability without incurring ~$180/month production infrastructure costs.',
      tech: [
        'AWS ECS Fargate',
        'GCP Cloud Run',
        'Terraform',
        'PostgreSQL',
        'Route53',
        'Cloud SQL',
        'GitHub Actions',
        'OIDC',
      ],
      link: 'https://github.com/brianmlasky/multi-cloud-dr-platform',
      linkLabel: 'View Repository →',
    },
    {
      title: 'CI/CD Automation Pipeline',
      status: 'Live',
      description:
        'GitHub Actions workflow powering this portfolio. Uses OIDC federation for keyless AWS authentication — no long-lived credentials stored in GitHub. Runs terraform fmt, validate, plan, and apply on merge to main. Structured for reuse across projects.',
      tech: [
        'GitHub Actions',
        'OIDC',
        'Terraform',
        'AWS IAM',
        'Bash',
      ],
      link: 'https://github.com/brianmlasky/brian-lasky.com/blob/main/.github/workflows/deploy.yml',
      linkLabel: 'View Workflow →',
    },
  ];

  const statusStyles: Record<string, string> = {
    Live: 'bg-green-900 text-green-400 border border-green-700',
    'Live — Simulation Mode': 'bg-blue-900 text-blue-400 border border-blue-700',
    'In Development': 'bg-yellow-900 text-yellow-400 border border-yellow-700',
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Production infrastructure and automation — every component version-controlled and documented
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-blue-500 transition-colors flex flex-col"
            >
              {/* Status Badge */}
              <div className="mb-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link !== '#' ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-400 hover:translate-x-2 transition-transform inline-block"
                >
                  {project.linkLabel}
                </a>
              ) : (
                <span className="mt-auto text-gray-500 text-sm">
                  {project.linkLabel}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
