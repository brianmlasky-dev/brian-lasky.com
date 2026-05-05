'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-2">Brian Lasky</h3>
            <p className="text-gray-400">Cloud Solutions Architect | AWS • Google Cloud • Terraform</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Connect</h4>
            <div className="space-y-2 text-gray-400">
              <a href="mailto:brian.lasky@outlook.com" className="block hover:text-blue-400 transition-colors">
                📧 brian.lasky@outlook.com
              </a>
              <a href="https://linkedin.com/in/brian-lasky-67464086" className="block hover:text-blue-400 transition-colors" target="_blank">
                💼 LinkedIn
              </a>
              <a href="https://github.com/brianmlasky-dev" className="block hover:text-blue-400 transition-colors" target="_blank">
                🐙 GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Brian Lasky. Cloud Architect & Infrastructure Engineer.
          </p>
          <p className="text-center text-gray-500 text-xs mt-2">
            Built with Next.js • Deployed via AWS Lambda • Secured with TLS 1.3
          </p>
        </div>
      </div>
    </footer>
  );
}
