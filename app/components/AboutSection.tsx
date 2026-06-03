export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#0b0f19]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 tracking-tight">Principal-Level Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-[#ff9900]">
            <h3 className="text-white font-bold mb-2">Autonomous Infrastructure</h3>
            <p className="text-[#aab7b8] text-sm">Design and deploy self-healing cloud ecosystems that eliminate human-in-the-loop bottlenecks for rapid scalability.</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-[#ff9900]">
            <h3 className="text-white font-bold mb-2">Fiscal SecOps</h3>
            <p className="text-[#aab7b8] text-sm">Implement proactive fiscal guardrails and policy-as-code to prevent AI token runaway and ensure cloud cost-efficiency.</p>
          </div>
          
          <div className="bg-[#1a1f2e] p-6 rounded-lg border-l-4 border-[#ff9900]">
            <h3 className="text-white font-bold mb-2">Multi-Cloud Resilience</h3>
            <p className="text-[#aab7b8] text-sm">Architect high-availability disaster recovery models that guarantee business continuity across AWS and GCP.</p>
          </div>
        </div>

        <p className="mt-10 text-[#aab7b8] leading-relaxed">
          I bridge the gap between initial blueprint design and production-grade governance. My approach is rooted in continuous hardening, ensuring systems are inherently secure and audit-ready from day one. Driven by a philosophy of strategic governance and autonomous resilience, I build infrastructure that evolves faster than the threats it defends against.
        </p>
      </div>
    </section>
  );
}