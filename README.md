# brian-lasky.com

Personal portfolio and cloud architecture showcase.

## Stack

- **Frontend:** Next.js 16, TypeScript, Tailwind CSS, Turbopack
- **Hosting:** GitHub Codespaces (dev), Vercel (prod)
- **DNS:** AWS Route 53 — brian-lasky.com
- **API:** AWS API Gateway (4wuinyvkr0) → Lambda → SES
- **IaC:** Terraform modules for Lambda, API Gateway, S3, CloudFront, Route 53

## Local Development

    npm install
    npm run dev
    # http://localhost:3000

## Architecture

See [docs/adr/ADR-001-honest-reset.md](docs/adr/ADR-001-honest-reset.md)

Contact form flow:

    Browser → Route 53 → API Gateway → Lambda (Node.js 18) → SES → Inbox

## Infrastructure

    cd terraform
    terraform init
    terraform plan
    terraform apply

Modules: `lambda`, `api_gateway`, `s3`, `cloudfront`, `route53`

## Contact

brian.lasky@outlook.com
