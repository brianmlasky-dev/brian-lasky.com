data "aws_iam_user" "portfolio_dev" {
  user_name = var.iam_user_name
}

data "aws_iam_policy_document" "route53_changeset" {
  statement {
    sid    = "Route53ChangeRecordSets"
    effect = "Allow"
    actions = [
      "route53:ChangeResourceRecordSets",
      "route53:GetChange"
    ]
    resources = [
      "arn:aws:route53:::hostedzone/${var.route53_zone_id}",
      "arn:aws:route53:::change/*"
    ]
  }
}

data "aws_iam_policy_document" "terraform_state_access" {
  statement {
    sid    = "TerraformStateS3Access"
    effect = "Allow"
    actions = [
      "s3:GetObject",
      "s3:PutObject",
      "s3:DeleteObject",
      "s3:ListBucket"
    ]
    resources = [
      "arn:aws:s3:::${var.terraform_state_bucket}",
      "arn:aws:s3:::${var.terraform_state_bucket}/*"
    ]
  }
}

resource "aws_iam_user_policy" "route53_changeset" {
  name   = "route53-changeset"
  user   = data.aws_iam_user.portfolio_dev.user_name
  policy = data.aws_iam_policy_document.route53_changeset.json
}

resource "aws_iam_user_policy" "terraform_state_access" {
  name   = "terraform-state-access"
  user   = data.aws_iam_user.portfolio_dev.user_name
  policy = data.aws_iam_policy_document.terraform_state_access.json
}

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_iam_policy_document" "github_actions_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRoleWithWebIdentity"]

    principals {
      type        = "Federated"
      identifiers = [data.aws_iam_openid_connect_provider.github.arn]
    }

    condition {
      test     = "StringEquals"
      variable = "token.actions.githubusercontent.com:aud"
      values   = ["sts.amazonaws.com"]
    }

    condition {
      test     = "StringLike"
      variable = "token.actions.githubusercontent.com:sub"
      values   = ["repo:${var.github_org}/${var.github_repo}:ref:refs/heads/main"]
    }
  }
}

resource "aws_iam_role" "github_actions_deploy" {
  name               = "github-portfolio-deploy-role"
  assume_role_policy = data.aws_iam_policy_document.github_actions_assume_role.json

  tags = {
    Project   = "portfolio"
    ManagedBy = "terraform"
  }
}

data "aws_iam_policy_document" "iam_self_inspect" {
  statement {
    sid    = "IAMSelfInspect"
    effect = "Allow"
    actions = [
      "iam:GetUser",
      "iam:ListOpenIDConnectProviders",
      "iam:GetOpenIDConnectProvider"
    ]
    resources = ["*"]
  }
}

data "aws_iam_policy_document" "ses_notification_read" {
  statement {
    sid    = "SESNotificationRead"
    effect = "Allow"
    actions = [
      "ses:GetIdentityNotificationAttributes"
    ]
    resources = ["*"]
  }
}

resource "aws_iam_user_policy" "iam_self_inspect" {
  name   = "iam-self-inspect"
  user   = data.aws_iam_user.portfolio_dev.user_name
  policy = data.aws_iam_policy_document.iam_self_inspect.json
}

resource "aws_iam_user_policy" "ses_notification_read" {
  name   = "ses-notification-read"
  user   = data.aws_iam_user.portfolio_dev.user_name
  policy = data.aws_iam_policy_document.ses_notification_read.json
}
