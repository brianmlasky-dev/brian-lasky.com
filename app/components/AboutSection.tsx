'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900 px-4 pt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>

        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I'm a <span className="text-blue-400 font-semibold">Cloud Infrastructure Engineer</span> transitioning 
            from 10 years of operational work in high-stakes production environments. I hold certifications as an{' '}
            <span className="text-blue-400 font-semibold">AWS Solutions Architect – Associate</span> and{' '}
            <span className="text-blue-400 font-semibold">Google Professional Cloud Architect</span>, and I'm 
            currently pursuing <span className="text-blue-400 font-semibold">CompTIA Security+</span>.
          </p>

          <p className="text-lg leading-relaxed">
            My background in safety-critical operations gave me a foundation in operational discipline, 
            documented procedures, and systematic problem-solving — instincts I now apply directly to 
            cloud systems design. I build infrastructure that is auditable, repeatable, and recoverable 
            by default.
          </p>

          <p className="text-lg leading-relaxed">
            This portfolio is a working production system — not a demo. It runs on AWS infrastructure 
            provisioned entirely with <span className="text-blue-400 font-semibold">Terraform</span>, 
            deployed through a <span className="text-blue-400 font-semibold">GitHub Actions CI/CD pipeline</span>, 
            with serverless compute via Lambda, DNS managed through Route53, and transactional email 
            through SES. Every component is codified, version-controlled, and monitored.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">2</div>
              <div className="text-gray-400 text-sm">Cloud Certifications</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">10+</div>
              <div className="text-gray-400 text-sm">Years Operational Experience</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">100%</div>
              <div className="text-gray-400 text-sm">Infrastructure as Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
