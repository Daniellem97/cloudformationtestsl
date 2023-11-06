terraform {
  backend "s3" {
    bucket = "sltftestbucket"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}
