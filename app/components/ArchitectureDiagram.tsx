'use client';

export default function ArchitectureDiagram() {
  return (
    <section id="architecture" className="py-20 bg-gray-800 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION 1: SERVERLESS AGENTIC GOVERNANCE CONTROLLER (SAGC) --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Architecture
          </h2>
          <p className="text-gray-400 text-lg">
            Serverless Agentic Governance Controller (SAGC)
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 overflow-x-auto mb-12">
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#6B7280" />
              </marker>
              <marker id="arrow-reject" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#EF4444" />
              </marker>
            </defs>

            {/* Background */}
            <rect width="1000" height="400" fill="#111827" rx="8" />

            {/* AI Application / Agent */}
            <rect x="30" y="160" width="140" height="80" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="2" rx="6" />
            <text x="100" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Agentic App</text>
            <text x="100" y="215" textAnchor="middle" fill="#93C5FD" fontSize="11">Autonomous Loop</text>
            <text x="100" y="230" textAnchor="middle" fill="#93C5FD" fontSize="11">LLM Request</text>

            {/* Arrow 1 */}
            <line x1="170" y1="200" x2="230" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* LiteLLM Gateway */}
            <rect x="230" y="160" width="140" height="80" fill="#5B21B6" stroke="#8B5CF6" strokeWidth="2" rx="6" />
            <text x="300" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">AI Gateway</text>
            <text x="300" y="215" textAnchor="middle" fill="#C4B5FD" fontSize="11">LiteLLM Routing</text>
            <text x="300" y="230" textAnchor="middle" fill="#C4B5FD" fontSize="11">Token Counting</text>

            {/* Arrow 2 */}
            <line x1="370" y1="200" x2="430" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* OPA Gatekeeper (Fiscal Guardrail) */}
            <rect x="430" y="160" width="140" height="80" fill="#7F1D1D" stroke="#EF4444" strokeWidth="2" rx="6" />
            <text x="500" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">OPA Gatekeeper</text>
            <text x="500" y="210" textAnchor="middle" fill="#FCA5A5" fontSize="11">Admission Control</text>
            <text x="500" y="225" textAnchor="middle" fill="#FCA5A5" fontSize="11">Budget Enforcement</text>

            {/* Reject Arrow */}
            <line x1="500" y1="160" x2="500" y2="100" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrow-reject)" strokeDasharray="4" />
            <text x="500" y="90" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold">403 Forbidden</text>
            <text x="500" y="105" textAnchor="middle" fill="#FCA5A5" fontSize="10">(Budget Exceeded)</text>

            {/* Arrow 3 (Allow) */}
            <line x1="570" y1="200" x2="630" y2="200" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow)" />
            <text x="600" y="190" textAnchor="middle" fill="#10B981" fontSize="10" fontWeight="bold">Allow</text>

            {/* Workload Identity Federation */}
            <rect x="630" y="160" width="140" height="80" fill="#065F46" stroke="#10B981" strokeWidth="2" rx="6" />
            <text x="700" y="190" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Keyless Auth</text>
            <text x="700" y="210" textAnchor="middle" fill="#6EE7B7" fontSize="11">GCP WIF</text>
            <text x="700" y="225" textAnchor="middle" fill="#6EE7B7" fontSize="11">Ephemeral Tokens</text>

            {/* Arrow 4 */}
            <line x1="770" y1="200" x2="830" y2="200" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Target LLM Provider */}
            <rect x="830" y="160" width="140" height="80" fill="#1E3A5F" stroke="#60A5FA" strokeWidth="2" rx="6" />
            <text x="900" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">LLM Provider</text>
            <text x="900" y="215" textAnchor="middle" fill="#93C5FD" fontSize="11">Frontier / OSS Models</text>
            <text x="900" y="230" textAnchor="middle" fill="#93C5FD" fontSize="11">API Execution</text>

            <text x="500" y="35" textAnchor="middle" fill="#F9FAFB" fontSize="16" fontWeight="bold">Serverless Agentic Governance Controller (SAGC)</text>
            <text x="500" y="55" textAnchor="middle" fill="#6B7280" fontSize="12">Zero-Trust Fiscal SecOps Architecture</text>
          </svg>
        </div>

        {/* --- SECTION 2: MULTI-CLOUD DR --- */}
        <div className="text-center mt-20 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NorthStar Multi-Cloud DR
          </h2>
          <p className="text-gray-400 text-lg">
            Active-Passive Topology across AWS & GCP
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg p-8 border border-gray-700 overflow-x-auto">
          <svg
            viewBox="0 0 1000 400"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#6B7280" />
              </marker>
            </defs>

            <rect width="1000" height="400" fill="#111827" rx="8" />

            {/* GitHub Actions */}
            <rect x="50" y="160" width="140" height="80" fill="#374151" stroke="#9CA3AF" strokeWidth="2" rx="6" />
            <text x="120" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">GitHub Actions</text>
            <text x="120" y="215" textAnchor="middle" fill="#D1D5DB" fontSize="11">OIDC / WIF</text>
            <text x="120" y="230" textAnchor="middle" fill="#D1D5DB" fontSize="11">Terraform CI/CD</text>

            {/* Routing Layer */}
            <rect x="430" y="40" width="140" height="80" fill="#5B21B6" stroke="#8B5CF6" strokeWidth="2" rx="6" />
            <text x="500" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Global LB</text>
            <text x="500" y="95" textAnchor="middle" fill="#C4B5FD" fontSize="11">Route 53</text>
            <text x="500" y="110" textAnchor="middle" fill="#C4B5FD" fontSize="11">Failover Routing</text>

            {/* Primary GCP */}
            <rect x="280" y="160" width="180" height="100" fill="#065F46" stroke="#10B981" strokeWidth="2" rx="6" />
            <text x="370" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Primary (GCP)</text>
            <text x="370" y="215" textAnchor="middle" fill="#6EE7B7" fontSize="11">GKE Autopilot</text>
            <text x="370" y="230" textAnchor="middle" fill="#6EE7B7" fontSize="11">Active Workloads</text>
            <text x="370" y="245" textAnchor="middle" fill="#6EE7B7" fontSize="11">Cloud SQL</text>

            {/* Passive AWS */}
            <rect x="540" y="160" width="180" height="100" fill="#7F1D1D" stroke="#EF4444" strokeWidth="2" rx="6" />
            <text x="630" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">Passive (AWS)</text>
            <text x="630" y="215" textAnchor="middle" fill="#FCA5A5" fontSize="11">EKS Fargate</text>
            <text x="630" y="230" textAnchor="middle" fill="#FCA5A5" fontSize="11">Pilot Light (Scaled to 0)</text>
            <text x="630" y="245" textAnchor="middle" fill="#FCA5A5" fontSize="11">Amazon RDS</text>

            {/* DMS */}
            <rect x="430" y="300" width="140" height="60" fill="#B45309" stroke="#F59E0B" strokeWidth="2" rx="6" />
            <text x="500" y="330" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">AWS DMS</text>
            <text x="500" y="345" textAnchor="middle" fill="#FDE68A" fontSize="11">Async CDC Sync</text>

            {/* Arrows */}
            {/* Deploy Arrow to GCP */}
            <line x1="190" y1="180" x2="270" y2="180" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow2)" />
            {/* Deploy Arrow to AWS */}
            <line x1="190" y1="220" x2="530" y2="220" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow2)" />
            
            {/* LB to GCP */}
            <line x1="450" y1="120" x2="400" y2="150" stroke="#10B981" strokeWidth="2" markerEnd="url(#arrow2)" />
            {/* LB to AWS */}
            <line x1="550" y1="120" x2="600" y2="150" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrow2)" />

            {/* DB Sync Arrows */}
            <line x1="370" y1="260" x2="430" y2="310" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow2)" />
            <line x1="570" y1="310" x2="630" y2="260" stroke="#6B7280" strokeWidth="2" markerEnd="url(#arrow2)" />

            <text x="500" y="25" textAnchor="middle" fill="#F9FAFB" fontSize="16" fontWeight="bold">Multi-Cloud Resilience & Disaster Recovery</text>
            <text x="500" y="380" textAnchor="middle" fill="#6B7280" fontSize="12">15-Min RPO / 4-Hr RTO</text>
          </svg>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-green-400 mb-2">Primary (GCP)</h3>
            <p className="text-gray-400 text-sm">
              GKE Autopilot handling active production traffic. Infrastructure managed via Terraform with strict OPA Gatekeeper governance.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-red-400 mb-2">Pilot Light (AWS)</h3>
            <p className="text-gray-400 text-sm">
              EKS Fargate passive environment scaled to zero. Aggressively optimized to consume &lt;5% compute cost during standard operations.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-yellow-400 mb-2">Zero-Trust Auth & CDC</h3>
            <p className="text-gray-400 text-sm">
              Keyless deployment via GitHub Actions WIF/OIDC. State synchronization handled asynchronously via AWS DMS (Change Data Capture).
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}