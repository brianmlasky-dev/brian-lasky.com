output "name_servers" {
  value = data.aws_route53_zone.primary.name_servers
}