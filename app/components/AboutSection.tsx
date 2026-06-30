export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0b0f19]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Bridging Operational Discipline with Kubernetes Governance</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-white font-bold mb-2">Kubernetes Governance</h3>
            <p className="text-[#aab7b8] text-sm">Deploying fail-closed control planes and OPA policy-as-code to enforce structural constraints directly at the API server.</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-white font-bold mb-2">Fiscal SecOps</h3>
            <p className="text-[#aab7b8] text-sm">Implementing real-time container-level telemetry and circuit breakers to permanently neutralize AI token runaway.</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-white font-bold mb-2">Multi-Cloud Resilience</h3>
            <p className="text-[#aab7b8] text-sm">Building zero-trust, keyless active-passive topologies across GCP and AWS with keyless OIDC federation.</p>
          </div>
        </div>

        <div className="mt-10 space-y-4 text-[#aab7b8] leading-relaxed">
          <p>
            My engineering approach is driven by a simple operational reality: I build for environments where networks partition, upstream APIs degrade, and autonomous loops happen. This mindset is rooted in 17+ years of physical production operations and over 125 regulatory-grade incident investigations, where system uptime and deterministic safety contracts were non-negotiable.
          </p>
          <p>
            Today, I translate that exact same incident command discipline to cloud-native platforms. Instead of relying on passive, post-billing alerts or static documentation, I focus on moving infrastructure governance directly into the Kubernetes control plane through mathematical, automated enforcement.
          </p>
          <p>
            Through my flagship work with the Serverless Agentic Governance Controller (SAGC), I've proven that isolating blast radiuses, securing cross-cloud workloads using ephemeral Workload Identity Federation, and enforcing strict resource budgets can be built seamlessly right into the delivery pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}