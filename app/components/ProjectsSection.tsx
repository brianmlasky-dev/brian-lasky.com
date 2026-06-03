import { ProjectCard } from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#0b0f19]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white tracking-tight mb-10">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard 
            iconType="server"
            title="Multi-Cloud DR Platform"
            desc="Active-passive redundancy between AWS/GCP"
            tags={["Terraform", "Kubernetes", "DNS"]}
            challenge="Achieving high-availability across cloud boundaries."
            solution="Architected environment parity and automated DNS failover."
            impact="Reduced idle cloud spend by 30%."
          />

          <ProjectCard 
            iconType="shield"
            title="Resilience Control Plane"
            desc="Governance for autonomous agentic AI"
            tags={["Terraform", "OPA", "Rego"]}
            challenge="Securing high-stakes financial LLM workloads."
            solution="Deterministic, fail-closed gateway for fiscal budgets."
            impact="Mitigated $250,000+ potential financial exposure."
          />

          <ProjectCard 
            iconType="bot"
            title="Agentic Governance Controller"
            desc="Admission Control Middleware for AI"
            tags={["Python", "Prometheus", "K8s"]}
            challenge="Autonomous agents lack native fiscal circuit breakers."
            solution="Middleware to validate fiscal state before inference."
            impact="Achieved real-time Token Burn Rate observability."
          />
        </div>
      </div>
    </section>
  );
}