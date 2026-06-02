export default function RCPProject() {
  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <h1>Resilience Control Plane (RCP)</h1>
      <p className="text-xl text-gray-600 mb-8">
        Deterministic governance for autonomous agentic AI at scale.
      </p>

      <section className="mb-10">
        <h2>The Challenge: Agentic Token Runaway</h2>
        <p>
          Traditional infrastructure lacks the "fiscal awareness" required for autonomous AI.
          I architected the RCP to bridge this gap, ensuring that agentic workloads 
          cannot provision resources that exceed budget constraints or violate security posture.
        </p>
      </section>

      <section className="mb-10">
        <h2>The Architectural Solution</h2>
        <p>
          By implementing a "fail-closed" governance gate, I moved security from a reactive 
          audit log into the CI/CD pipeline.
        </p>
        {/* Placeholder for your terminal screenshot */}
        <figure className="my-6">
          <img src="/images/governance-gate.png" alt="Governance Gate Logic" />
          <figcaption>Shift-Left enforcement in action.</figcaption>
        </figure>
      </section>

      <section className="mb-10">
        <h2>Principal's Perspective</h2>
        <p>
          Architecture isn't just about the code; it's about the decisions. 
          View the full documentation and decision history:
        </p>
        <ul className="list-disc ml-6">
          <li><a href="...">ADR-0005: Atomic Budget State Management</a></li>
          <li><a href="...">ADR-0006: Fail-Closed Contract Design</a></li>
        </ul>
      </section>
      
      <a href="https://github.com/brianmlasky/resilience-control-plane[LINK_TO_GITHUB]" className="btn-primary">View Hardened Repo on GitHub</a>
    </article>
  )
}