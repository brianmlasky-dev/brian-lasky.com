variable "domain_name" {
  description = "SES verified domain identity"
  type        = string
}

variable "notification_email" {
  description = "Email address to receive bounce and complaint notifications"
  type        = string
}
