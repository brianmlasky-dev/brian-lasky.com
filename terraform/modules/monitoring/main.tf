resource "aws_sns_topic" "contact_form_alerts" {
  name = var.sns_topic_name
}

resource "aws_sns_topic_subscription" "email_alert" {
  topic_arn = aws_sns_topic.contact_form_alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}

resource "aws_cloudwatch_metric_alarm" "lambda_errors" {
  alarm_name          = var.alarm_name
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = 1
  metric_name         = "Errors"
  namespace           = "AWS/Lambda"
  period              = 60
  statistic           = "Sum"
  threshold           = 1
  alarm_description   = "Triggers when the contact form Lambda logs an error"
  treat_missing_data  = "notBreaching"

  dimensions = {
    FunctionName = var.lambda_function_name
  }

  alarm_actions = [aws_sns_topic.contact_form_alerts.arn]
  ok_actions    = [aws_sns_topic.contact_form_alerts.arn]
}
