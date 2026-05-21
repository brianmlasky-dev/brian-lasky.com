import React from 'react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Multi-Cloud Disaster Recovery (DR) Platform</h3>
        
        <div className="space-y-4">
          <p><strong>The Challenge:</strong> Traditional DR is costly and prone to human error. I needed to solve for "active-passive" redundancy across AWS and GCP while minimizing RTO.</p>
          
          <p><strong>The Solution:</strong> Architected a platform using Terraform for environment parity and Kubernetes for cross-cloud workload orchestration. Integrated automated health checks for intelligent failover.</p>
          
          <p><strong>Governance (Fiscal SecOps):</strong> Implemented automated resource tagging and secondary-cluster teardown, reducing idle cloud spend by 30%.</p>
          
          <p><strong>Key Outcomes:</strong> Achieved automated environment provisioning and significant reduction in manual operational overhead.</p>
        </div>
      </div>
    </section>
  );
}
