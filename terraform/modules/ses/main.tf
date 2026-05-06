# SNS topic for SES bounce and complaint notifications
resource "aws_sns_topic" "ses_bounce_complaints" {
  name = "ses-bounce-complaints"
}

resource "aws_sns_topic_subscription" "ses_bounce_complaints_email" {
  topic_arn = aws_sns_topic.ses_bounce_complaints.arn
  protocol  = "email"
  endpoint  = var.notification_email
}

# Reference the existing SES domain identity — do not recreate it
data "aws_ses_domain_identity" "domain" {
  domain = var.domain_name
}

# Wire bounce notifications to SNS
resource "aws_ses_identity_notification_topic" "bounce" {
  identity                 = data.aws_ses_domain_identity.domain.domain
  notification_type        = "Bounce"
  topic_arn                = aws_sns_topic.ses_bounce_complaints.arn
  include_original_headers = false
}

# Wire complaint notifications to SNS
resource "aws_ses_identity_notification_topic" "complaint" {
  identity                 = data.aws_ses_domain_identity.domain.domain
  notification_type        = "Complaint"
  topic_arn                = aws_sns_topic.ses_bounce_complaints.arn
  include_original_headers = false
}
