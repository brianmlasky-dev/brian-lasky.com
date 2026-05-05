'use client';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Serverless portfolio built with Next.js, deployed via AWS Lambda and API Gateway with SES email integration.',
      tech: ['Next.js', 'TypeScript', 'AWS Lambda', 'API Gateway', 'SES', 'Tailwind CSS'],
      link: 'https://github.com/brianmlasky-dev/brian-lasky.com',
    },
    {
      title: 'Multi-Cloud DR Platform',
      description: 'Comprehensive Disaster Recovery platform supporting AWS and Google Cloud with automated failover and monitoring.',
      tech: ['AWS', 'Google Cloud', 'Terraform', 'Python', 'CloudWatch', 'Monitoring'],
      link: '#',
    },
    {
      title: 'CI/CD Automation Framework',
      description: 'Reusable GitHub Actions workflows with OIDC-based cloud authentication for automated infrastructure and deployments.',
      tech: ['GitHub Actions', 'OIDC', 'Terraform', 'Bash', 'AWS', 'Automation'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-12">
          Real-world cloud infrastructure and automation solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              className="group bg-gray-800 rounded-lg border border-gray-700 p-6 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-blue-400 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-blue-400 group-hover:translate-x-2 transition-transform">
                View Project →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
