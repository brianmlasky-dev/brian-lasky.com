output "function_arn" {
  description = "ARN of the Lambda function"
  value       = aws_lambda_function.contact_form.arn
}

output "function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.contact_form.function_name
}

output "invoke_arn" {
  description = "Invoke ARN used by API Gateway"
  value       = aws_lambda_function.contact_form.invoke_arn
}

output "role_arn" {
  description = "ARN of the Lambda execution IAM role"
  value       = aws_iam_role.lambda_exec.arn
}
