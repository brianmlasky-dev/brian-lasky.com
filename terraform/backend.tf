terraform {
  backend "s3" {
    bucket  = "brian-lasky-terraform-state"
    key     = "portfolio/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
