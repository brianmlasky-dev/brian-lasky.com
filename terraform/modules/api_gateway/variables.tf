variable "api_name" {
  description = "Name of the API Gateway HTTP API"
  type        = string
}

variable "lambda_invoke_arn" {
  description = "Invoke ARN of the Lambda function"
  type        = string
}

variable "lambda_function_name" {
  description = "Name of the Lambda function for permission binding"
  type        = string
}

variable "domain_name" {
  description = "Root domain for CORS allow-origins"
  type        = string
}
