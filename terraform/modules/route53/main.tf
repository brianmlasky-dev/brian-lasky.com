data "aws_route53_zone" "primary" {
  name         = var.domain_name
  private_zone = false
}

resource "aws_route53_record" "apex_a" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "A"
  ttl     = 300
  records = [var.vercel_a_record_ip]
}

resource "aws_route53_record" "www_cname" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_name}"
  type    = "CNAME"
  ttl     = 300
  records = ["cname.vercel-dns.com"]
}

resource "aws_route53_record" "spf" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = var.domain_name
  type    = "TXT"
  ttl     = 300
  records = ["v=spf1 include:amazonses.com ~all"]
}

resource "aws_route53_record" "dmarc" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "_dmarc.${var.domain_name}"
  type    = "TXT"
  ttl     = 300
  records = ["v=DMARC1; p=none;"]
}

resource "aws_route53_record" "dkim_1" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "2tq6q7diuys7tl6rs3f6dvfytiskolll._domainkey.${var.domain_name}"
  type    = "CNAME"
  ttl     = 1800
  records = ["2tq6q7diuys7tl6rs3f6dvfytiskolll.dkim.amazonses.com"]
}

resource "aws_route53_record" "dkim_2" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "t62k2fh66sp5z2klmchzgvlp7oapkpqk._domainkey.${var.domain_name}"
  type    = "CNAME"
  ttl     = 1800
  records = ["t62k2fh66sp5z2klmchzgvlp7oapkpqk.dkim.amazonses.com"]
}

resource "aws_route53_record" "dkim_3" {
  zone_id = data.aws_route53_zone.primary.zone_id
  name    = "vwc2dwpbllvubknoydwhulmsdrplpemk._domainkey.${var.domain_name}"
  type    = "CNAME"
  ttl     = 1800
  records = ["vwc2dwpbllvubknoydwhulmsdrplpemk.dkim.amazonses.com"]
}
