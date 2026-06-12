export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0b0f19]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Bridging Industrial Reliability with Cloud-Native Architecture</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-[#ff9900]">
            <h3 className="text-white font-bold mb-2">Agentic AI Infrastructure</h3>
            <p className="text-[#aab7b8] text-sm">Design and deploy autonomous cloud ecosystems with decoupled governance to safely scale AI workloads.</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-[#ff9900]">
            <h3 className="text-white font-bold mb-2">Fiscal SecOps</h3>
            <p className="text-[#aab7b8] text-sm">Implement proactive fiscal guardrails and atomic state operations to prevent AI token runaway.</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-[#ff9900]">
            <h3 className="text-white font-bold mb-2">Multi-Cloud Resilience</h3>
            <p className="text-[#aab7b8] text-sm">Architect zero-trust disaster recovery models that guarantee business continuity across AWS and GCP.</p>
          </div>
        </div>

        <div className="mt-10 space-y-4 text-[#aab7b8] leading-relaxed">
          <p>
            My approach to platform engineering is fundamentally different from traditional software engineering. It is rooted in 17+ years of physical production operations and over 125 regulatory-grade incident investigations. I spent my early career managing safety-critical, high-pressure equipment where downtime wasn't just an inconvenience—it was a critical failure.
          </p>
          <p>
            Today, I bring that exact same industrial incident command discipline to distributed systems. I specialize in translating strict reliability requirements into robust, automated infrastructure. I don’t just blueprint systems; I build, deploy, and maintain the code that keeps them running safely at scale. 
          </p>
          <p>
            Whether I am decoupling business logic from governance to prevent AI "token runaway," or designing zero-trust multi-cloud failovers, my goal is to build systems that isolate blast radiuses, protect enterprise budgets, and fail safely.
          </p>
        </div>
      </div>
    </section>
  );
}
