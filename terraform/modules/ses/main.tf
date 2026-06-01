resource "aws_sns_topic" "ses_bounce_complaints" {
  name = "ses-bounce-complaints"
}

resource "aws_sns_topic_subscription" "ses_bounce_complaints_email" {
  topic_arn = aws_sns_topic.ses_bounce_complaints.arn
  protocol  = "email"
  endpoint  = var.notification_email
}

data "aws_ses_domain_identity" "domain" {
  domain = var.domain_name
}

resource "aws_ses_identity_notification_topic" "bounce" {
  identity                 = data.aws_ses_domain_identity.domain.domain
  notification_type        = "Bounce"
  topic_arn                = aws_sns_topic.ses_bounce_complaints.arn
  include_original_headers = false
}

resource "aws_ses_identity_notification_topic" "complaint" {
  identity                 = data.aws_ses_domain_identity.domain.domain
  notification_type        = "Complaint"
  topic_arn                = aws_sns_topic.ses_bounce_complaints.arn
  include_original_headers = false
}

resource "aws_ses_domain_dkim" "main" {
  domain = data.aws_ses_domain_identity.domain.domain
}

output "dkim_tokens" {
  value = aws_ses_domain_dkim.main.dkim_tokens
}