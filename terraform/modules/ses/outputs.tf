output "sns_topic_arn" {
  description = "ARN of the SES bounce and complaints SNS topic"
  value       = aws_sns_topic.ses_bounce_complaints.arn
}

output "sns_topic_name" {
  description = "Name of the SES bounce and complaints SNS topic"
  value       = aws_sns_topic.ses_bounce_complaints.name
}
