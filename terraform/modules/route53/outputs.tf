output "hosted_zone_id" {
  description = "Route 53 hosted zone ID"
  value       = data.aws_route53_zone.primary.zone_id
}

output "name_servers" {
  description = "Route 53 hosted zone name servers"
  value       = data.aws_route53_zone.primary.name_servers
}

output "apex_record_fqdn" {
  description = "FQDN of the apex A record"
  value       = aws_route53_record.apex_a.fqdn
}

output "www_record_fqdn" {
  description = "FQDN of the www CNAME record"
  value       = aws_route53_record.www_cname.fqdn
}
