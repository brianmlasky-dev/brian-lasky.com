variable "function_name" {
  description = "Name of the Lambda function"
  type        = string
}

variable "lambda_zip_path" {
  description = "Path to the Lambda deployment zip file"
  type        = string
}

variable "ses_from_email" {
  description = "Verified SES sender email address"
  type        = string
}

variable "ses_to_email" {
  description = "Email address to receive contact form submissions"
  type        = string
}

variable "environment" {
  description = "Deployment environment"
  type        = string
}

variable "iam_role_name" {
  description = "Override IAM role name (for importing existing resources)"
  type        = string
  default     = null
}

variable "iam_policy_name" {
  description = "Override IAM policy name (for importing existing resources)"
  type        = string
  default     = null
}

variable "memory_size" {
  description = "Lambda memory allocation in MB"
  type        = number
  default     = 128
}

variable "timeout" {
  description = "Lambda timeout in seconds"
  type        = number
  default     = 10
}
