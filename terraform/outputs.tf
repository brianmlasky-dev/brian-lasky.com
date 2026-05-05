output "api_endpoint" {
  description = "Public HTTPS endpoint for the contact form POST route"
  value       = module.api_gateway.endpoint_url
}

output "lambda_function_name" {
  description = "Name of the deployed Lambda function"
  value       = module.lambda.function_name
}

output "lambda_function_arn" {
  description = "ARN of the deployed Lambda function"
  value       = module.lambda.function_arn
}

output "sns_topic_arn" {
  description = "ARN of the SNS alerts topic"
  value       = module.monitoring.sns_topic_arn
}

output "alarm_arn" {
  description = "ARN of the CloudWatch Lambda error alarm"
  value       = module.monitoring.alarm_arn
}

output "nameservers" {
  description = "Route 53 nameservers for the hosted zone"
  value       = module.route53.name_servers
}
