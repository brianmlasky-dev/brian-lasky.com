output "iam_user_name" {
  description = "The IAM user name"
  value       = data.aws_iam_user.portfolio_dev.user_name
}

output "route53_policy_name" {
  description = "The route53-changeset inline policy name"
  value       = aws_iam_user_policy.route53_changeset.name
}

output "terraform_state_policy_name" {
  description = "The terraform-state-access inline policy name"
  value       = aws_iam_user_policy.terraform_state_access.name
}

output "github_actions_role_arn" {
  description = "ARN of the GitHub Actions OIDC deploy role"
  value       = aws_iam_role.github_actions_deploy.arn
}
