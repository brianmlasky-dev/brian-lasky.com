variable "sns_topic_name" {
  description = "Name of the SNS topic for contact form alerts"
  type        = string
}

variable "alert_email" {
  description = "Email address to receive CloudWatch alarm notifications"
  type        = string
}

variable "alarm_name" {
  description = "Name of the CloudWatch metric alarm"
  type        = string
}

variable "lambda_function_name" {
  description = "Lambda function name to monitor for errors"
  type        = string
}
