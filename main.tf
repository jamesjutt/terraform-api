resource "aws_s3_bucket" "api" {
  bucket = "testrestapitest"
  acl    = "private"

  versioning {
    enabled = true
  }
}

resource "aws_s3_bucket_object" "insert" {
  bucket = "testrestapitest"
  key    = "routes"
  source = "./build.zip"
}
