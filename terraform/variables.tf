variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "production"
}

variable "lambda_function_name" {
  description = "Name of the contact form Lambda function"
  type        = string
  default     = "portfolio-contact-form"
}

variable "lambda_zip_path" {
  description = "Path to the Lambda deployment zip"
  type        = string
  default     = "../lambda-function/function.zip"
}

variable "ses_from_email" {
  description = "Verified SES sender email address"
  type        = string
  default     = "noreply@brian-lasky.com"
}

variable "ses_to_email" {
  description = "Email address to receive contact form submissions"
  type        = string
  default     = "brian.lasky@outlook.com"
}

variable "api_name" {
  description = "Name of the API Gateway HTTP API"
  type        = string
  default     = "portfolio-contact-api"
}

variable "domain_name" {
  description = "Root domain name"
  type        = string
  default     = "brian-lasky.com"
}

variable "vercel_a_record_ip" {
  description = "Vercel IP for apex A record"
  type        = string
  default     = "216.198.79.1"
}
