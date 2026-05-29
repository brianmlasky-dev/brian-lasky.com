# Network Architecture: brian-lasky.com

## Overview
This portfolio site is architected for performance, security, and reproducibility. The entire stack is provisioned via **Terraform** and managed through **GitHub Actions**, ensuring that all infrastructure changes are version-controlled and auditable.

## Infrastructure Stack
* **Frontend:** Next.js 16 (App Router), deployed globally via **Vercel** edge network.
* **DNS & Traffic Management:** Managed via **AWS Route 53**. 
* **Infrastructure-as-Code (IaC):** Provisioned using modular Terraform. Route 53 records (A, CNAME, SPF, DMARC, DKIM) are defined within `terraform/modules/route53/`, ensuring strict consistency between environment deployments.
* **Backend Integration:** Serverless contact form flow utilizing AWS API Gateway and Lambda, with email delivery via Amazon SES.

## Architectural Discipline
By managing DNS and backend resources through Terraform rather than the AWS Console, we eliminate configuration drift and ensure that the production environment remains a faithful representation of the codebase.