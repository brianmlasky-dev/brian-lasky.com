output "sns_topic_arn" {
  description = "ARN of the SNS alerts topic"
  value       = aws_sns_topic.contact_form_alerts.arn
}

output "alarm_arn" {
  description = "ARN of the CloudWatch Lambda error alarm"
  value       = aws_cloudwatch_metric_alarm.lambda_errors.arn
}
