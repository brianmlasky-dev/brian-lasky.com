import { ProjectCard } from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-10">Flagship Engineering Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Agentic Governance Controller is currently first in the DOM order */}
          <ProjectCard 
            iconType="bot"
            title="Agentic Governance Controller"
            desc="Zero-Trust Fiscal SecOps for Autonomous AI"
            tags={["GCP WIF", "Kubernetes", "Terraform"]}
            challenge="Unconstrained AI agents expose enterprises to severe 'Denial of Wallet' risks, running up unbounded token costs while relying on vulnerable static credentials."
            solution="Architected an ambient identity control plane bridging GKE and IAM, eradicating static secrets."
            impact="Mathematically bounded compute footprint to $0.00 and secured $250k+ in runaway agent budget exposure."
          />

          <ProjectCard 
            iconType="server"
            title="NorthStar Multi-Cloud DR"
            desc="Active-passive resilience across AWS & GCP"
            tags={["Terraform", "OIDC", "Zero-Trust"]}
            challenge="Mitigating the 'Disaster Recovery Gap' and manual secret rotation."
            solution="Declarative state management with keyless Workload Identity Federation."
            impact="Targeted 0s RTO and 1s RPO without exposing static credentials."
          />

          <ProjectCard 
            iconType="shield"
            title="The Tombstone Protocol"
            desc="Automated Crash Forensics & Telemetry"
            tags={["Prometheus", "OpenTelemetry", "SRE"]}
            challenge="Pod termination during P0 events destroys critical root-cause data."
            solution="Sever network intent via policy while preserving local memory state."
            impact="Ensured regulatory-grade forensic audits for AI hallucinations."
          />
        </div>
      </div>
    </section>
  );
}