resource "google_storage_bucket" "bad_bucket" {
  name     = "my-insecure-bucket"
  acl      = "public-read"
}

resource "google_compute_instance" "ai_agent" {
  name       = "high-cost-agent"
  max_tokens = 10000
}