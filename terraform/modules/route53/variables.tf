variable "domain_name" {
  description = "Root domain name for the hosted zone"
  type        = string
}

variable "vercel_a_record_ip" {
  description = "Vercel IP address for the apex A record"
  type        = string
}

variable "ses_dkim_tokens" {
  type    = list(string)
  default = []
}