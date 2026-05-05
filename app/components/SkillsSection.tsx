'use client';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: '☁️ Cloud Platforms',
      skills: ['AWS (S3, CloudFront, Lambda, EC2, RDS)', 'Google Cloud', 'Multi-cloud Architecture'],
    },
    {
      title: '🏗️ Infrastructure as Code',
      skills: ['Terraform 1.5.7+', 'HCL Configuration', 'Modular Design', 'Version Control'],
    },
    {
      title: '🚀 CI/CD & Automation',
      skills: ['GitHub Actions', 'OIDC Authentication', 'Automated Deployments', 'Bash Scripting'],
    },
    {
      title: '🔒 Security & Best Practices',
      skills: ['HTTPS/TLS 1.3', 'Least Privilege IAM', 'Encryption', 'WAF & DDoS Protection'],
    },
    {
      title: '📊 Monitoring & Observability',
      skills: ['CloudWatch', 'Dashboards & Alarms', 'Log Analysis', 'Cost Monitoring'],
    },
    {
      title: '🏛️ Architecture & Design',
      skills: ['Disaster Recovery', 'Multi-region HA', 'Scalability', 'Cost Optimization'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Technical Skills</h2>
        <p className="text-gray-400 text-center mb-12">
          Certified expertise across cloud platforms and modern infrastructure practices
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-300 flex items-center gap-2">
                    <span className="text-blue-400">✓</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-lg text-white">
            <div className="text-2xl font-bold mb-2">🏆 AWS Certified</div>
            <div className="text-lg font-semibold">Solutions Architect – Associate</div>
            <p className="text-orange-100 text-sm mt-2">Demonstrates AWS expertise and architectural best practices</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-lg text-white">
            <div className="text-2xl font-bold mb-2">🏆 Google Cloud Certified</div>
            <div className="text-lg font-semibold">Professional Cloud Architect</div>
            <p className="text-blue-100 text-sm mt-2">Multi-cloud expertise and advanced architecture design</p>
          </div>
        </div>
      </div>
    </section>
  );
}
