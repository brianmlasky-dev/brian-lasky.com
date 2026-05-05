'use client';

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="py-20 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Architecture
          </h2>
          <p className="text-gray-400 text-lg">
            Serverless portfolio infrastructure on AWS
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 overflow-x-auto">
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="arrow"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#6B7280" />
              </marker>
            </defs>

            {/* Background */}
            <rect width="1000" height="400" fill="#111827" rx="8" />

            {/* User/Browser */}
            <rect x="30" y="160" width="140" height="80" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" rx="6" />
            <text x="100" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Browser</text>
            <text x="100" y="215" textAnchor="middle" fill="#93C5FD" fontSize="11">Next.js 16</text>
            <text x="100" y="230" textAnchor="middle" fill="#93C5FD" fontSize="11">TypeScript</text>

            {/* Arrow 1 */}
            <line x1="170" y1="200" x2="230" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="200" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="10">HTTPS</text>

            {/* Route 53 */}
            <rect x="230" y="160" width="140" height="80" fill="#5B21B6" stroke="#8B5CF6" strokeWidth="2" rx="6" />
            <text x="300" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Route 53</text>
            <text x="300" y="215" textAnchor="middle" fill="#C4B5FD" fontSize="11">brian-lasky.com</text>
            <text x="300" y="230" textAnchor="middle" fill="#C4B5FD" fontSize="11">DNS</text>

            {/* Arrow 2 */}
            <line x1="370" y1="200" x2="430" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="400" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="10">REST</text>

            {/* API Gateway */}
            <rect x="430" y="160" width="140" height="80" fill="#065F46" stroke="#10B981" strokeWidth="2" rx="6" />
            <text x="500" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">API Gateway</text>
            <text x="500" y="210" textAnchor="middle" fill="#6EE7B7" fontSize="11">4wuinyvkr0</text>
            <text x="500" y="225" textAnchor="middle" fill="#6EE7B7" fontSize="11">POST /contact</text>

            {/* Arrow 3 */}
            <line x1="570" y1="200" x2="630" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="600" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="10">Invoke</text>

            {/* Lambda */}
            <rect x="630" y="160" width="140" height="80" fill="#7F1D1D" stroke="#EF4444" strokeWidth="2" rx="6" />
            <text x="700" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Lambda</text>
            <text x="700" y="210" textAnchor="middle" fill="#FCA5A5" fontSize="11">contact-form</text>
            <text x="700" y="225" textAnchor="middle" fill="#FCA5A5" fontSize="11">Node.js 18.x</text>

            {/* Arrow Lambda -> SES (down) */}
            <line x1="700" y1="240" x2="700" y2="290" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="720" y="270" fill="#9CA3AF" fontSize="10">SendEmail</text>

            {/* SES */}
            <rect x="630" y="290" width="140" height="80" fill="#7C2D12" stroke="#FB923C" strokeWidth="2" rx="6" />
            <text x="700" y="325" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">SES</text>
            <text x="700" y="345" textAnchor="middle" fill="#FED7AA" fontSize="11">noreply@</text>
            <text x="700" y="360" textAnchor="middle" fill="#FED7AA" fontSize="11">brian-lasky.com</text>

            {/* Arrow SES -> Inbox */}
            <line x1="770" y1="330" x2="830" y2="330" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="800" y="320" textAnchor="middle" fill="#9CA3AF" fontSize="10">SMTP</text>

            {/* Inbox */}
            <rect x="830" y="290" width="140" height="80" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="2" rx="6" />
            <text x="900" y="325" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Inbox</text>
            <text x="900" y="345" textAnchor="middle" fill="#93C5FD" fontSize="10">brian.lasky</text>
            <text x="900" y="360" textAnchor="middle" fill="#93C5FD" fontSize="10">@outlook.com</text>

            {/* Arrow Lambda -> CloudWatch (right) */}
            <line x1="770" y1="185" x2="830" y2="185" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="800" y="175" textAnchor="middle" fill="#9CA3AF" fontSize="10">Logs</text>

            {/* CloudWatch */}
            <rect x="830" y="145" width="140" height="80" fill="#164E63" stroke="#22D3EE" strokeWidth="2" rx="6" />
            <text x="900" y="178" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">CloudWatch</text>
            <text x="900" y="198" textAnchor="middle" fill="#A5F3FC" fontSize="11">Logs & Metrics</text>
            <text x="900" y="213" textAnchor="middle" fill="#A5F3FC" fontSize="10">/aws/lambda/*</text>

            {/* Title */}
            <text x="500" y="35" textAnchor="middle" fill="#F9FAFB" fontSize="16" fontWeight="bold">AWS Serverless Architecture</text>
            <text x="500" y="55" textAnchor="middle" fill="#6B7280" fontSize="12">brian-lasky.com Contact Form Flow</text>
          </svg>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-blue-400 mb-2">Frontend</h3>
            <p className="text-gray-400 text-sm">
              Next.js 16 with Turbopack. TypeScript, Tailwind CSS, React hooks with hydration-safe rendering.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-2">API Layer</h3>
            <p className="text-gray-400 text-sm">
              API Gateway (4wuinyvkr0) routes POST /contact to Lambda with CORS and OPTIONS preflight support.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-orange-400 mb-2">Email</h3>
            <p className="text-gray-400 text-sm">
              Lambda uses AWS SDK v3 SendEmailCommand via SES. Verified domain and recipient. 0% bounce rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
