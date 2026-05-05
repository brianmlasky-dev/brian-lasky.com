'use client';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900 px-4 pt-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            I'm a <span className="text-blue-400 font-semibold">Cloud Solutions Architect</span> with hands-on experience designing and implementing scalable, secure infrastructure on AWS and Google Cloud. I hold certifications as an <span className="text-blue-400 font-semibold">AWS Solutions Architect Associate</span> and <span className="text-blue-400 font-semibold">Google Cloud Professional Cloud Architect</span>, demonstrating deep expertise across multiple cloud platforms.
          </p>

          <p className="text-lg leading-relaxed">
            Specializing in <span className="text-blue-400 font-semibold">Infrastructure as Code using Terraform</span>, I build production-grade environments with automated CI/CD pipelines via GitHub Actions and OIDC authentication. My focus is on security-first architecture, cost optimization, and disaster recovery planning.
          </p>

          <p className="text-lg leading-relaxed">
            This portfolio itself is a demonstration of my capabilities—a serverless application built with Next.js, deployed via AWS Lambda and API Gateway, with email infrastructure via SES. It showcases modern cloud-native development practices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">5+</div>
              <div className="text-gray-400 text-sm">Years Cloud Experience</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">2</div>
              <div className="text-gray-400 text-sm">Active Certifications</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="text-3xl font-bold text-blue-400">∞</div>
              <div className="text-gray-400 text-sm">Cloud Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
