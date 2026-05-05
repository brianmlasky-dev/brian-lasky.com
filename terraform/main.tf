provider "aws" {
  region = var.aws_region
}

module "lambda" {
  source = "./modules/lambda"

  function_name   = var.lambda_function_name
  lambda_zip_path = var.lambda_zip_path
  ses_from_email  = var.ses_from_email
  ses_to_email    = var.ses_to_email
  environment     = var.environment
  iam_role_name   = "portfolio-contact-lambda-role"
  iam_policy_name = "lambda-ses-policy"
  memory_size     = 256
  timeout         = 30
}

module "api_gateway" {
  source = "./modules/api_gateway"

  api_name             = "portfolio-contact-api"
  lambda_invoke_arn    = module.lambda.invoke_arn
  lambda_function_name = module.lambda.function_name
  domain_name          = var.domain_name
}

module "route53" {
  source = "./modules/route53"

  domain_name        = var.domain_name
  vercel_a_record_ip = var.vercel_a_record_ip
}

module "monitoring" {
  source = "./modules/monitoring"

  sns_topic_name       = "contact-form-alerts"
  alert_email          = var.ses_to_email
  alarm_name           = "contact-form-lambda-errors"
  lambda_function_name = module.lambda.function_name
}
