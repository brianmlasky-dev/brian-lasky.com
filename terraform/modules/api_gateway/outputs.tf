output "endpoint_url" {
  description = "The HTTP API Gateway invoke URL"
  value       = aws_apigatewayv2_stage.default.invoke_url
}

output "api_id" {
  description = "The API Gateway HTTP API ID"
  value       = aws_apigatewayv2_api.contact_api.id
}

output "execution_arn" {
  description = "The API Gateway execution ARN"
  value       = aws_apigatewayv2_api.contact_api.execution_arn
}
