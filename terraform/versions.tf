terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  # Uncomment to enable remote state in S3
  # backend "s3" {
  #   bucket = "brian-lasky-tfstate"
  #   key    = "portfolio/terraform.tfstate"
  #   region = "us-east-1"
  # }
}
