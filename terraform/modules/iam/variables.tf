variable "iam_user_name" {
  description = "The IAM user to attach policies to"
  type        = string
  default     = "portfolio-dev"
}

variable "route53_zone_id" {
  description = "The Route53 hosted zone ID for portfolio domain"
  type        = string
}

variable "terraform_state_bucket" {
  description = "S3 bucket name for Terraform remote state"
  type        = string
  default     = "brian-lasky-terraform-state"
}
