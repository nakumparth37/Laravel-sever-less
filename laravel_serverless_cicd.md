# Laravel Serverless Deployment with CI/CD (AWS Free Tier)

This guide walks you through deploying a Laravel application on AWS using the Serverless Framework with Bref, and automating deployments using GitHub Actions CI/CD.

---

## ✅ Prerequisites

### Required Tools & Accounts
- AWS Account (Free Tier eligible)
- GitHub Repository for code hosting and CI/CD
- IAM user with permissions for:
  - Lambda
  - API Gateway
  - RDS (MySQL)
  - S3
  - SQS
- AWS CLI installed and configured (`aws configure`)
- Node.js v18 or higher
- Composer (for PHP dependency management)
- PHP version 8.1 or 8.2
- Serverless Framework (`npm install -g serverless`)
- Bref PHP runtime (`composer require bref/bref`)

---

## 📁 Project Directory Structure
```
Docker-serverless/
├── app/                  # Laravel application
├── deploy/              # Optional deploy config/scripts
├── docker-compose.yml
├── serverless.yml       # Serverless Framework configuration
```

## Find the **Bref**'s PHP run-time from below given link

[Bref runtime versions](https://bref.sh/docs/runtimes)

---

## ⚙️ serverless.yml Configuration

```yaml
service: laravel

frameworkVersion: '3'

plugins:
  - ./vendor/bref/bref

provider:
  name: aws
  region: ap-south-1
  runtime: provided.al2
  timeout: 28

  environment:
    APP_ENV: production
    APP_DEBUG: false
    APP_URL: https://${self:custom.apiGatewayBaseUrl}
    BASE_URL: https://${self:custom.apiGatewayBaseUrl}/
    OAUTH_REDIRECT_URL: https://${self:custom.apiGatewayBaseUrl}/login/github/callback
    GOOGLE_REDIRECT: https://${self:custom.apiGatewayBaseUrl}/login/google/callback
    DB_CONNECTION: mysql
    DB_HOST: ${cf:laravel.RDSInstanceEndpoint}
    DB_PORT: 3306
    DB_DATABASE: laravel
    DB_USERNAME: laravel
    DB_PASSWORD: laravelpass
    AWS_DEFAULT_REGION: ap-south-1
    AWS_BUCKET: ${cf:laravel.S3Bucket}

functions:
  web:
    handler: public/index.php
    runtime: php-82-fpm
    layers:
      - ${bref:layer.php-82-fpm}
    events:
      - httpApi: '*'

  artisan:
    handler: artisan
    runtime: php-82-console
    layers:
      - ${bref:layer.php-82-console}
    timeout: 720
    events:
      - schedule:
          rate: rate(1 minute)
          input: '"schedule:run"'
      - schedule:
          rate: rate(1 minute)
          input: '"queue:work --tries=3"'

package:
  patterns:
    - '!node_modules/**'
    - '!storage/**'
    - '!tests/**'
    - 'public/build/manifest.json'

resources:
  Resources:
    S3Bucket:
      Type: AWS::S3::Bucket
      Properties:
        BucketName: !Sub '${AWS::StackName}-storage'
        AccessControl: PublicRead
        PublicAccessBlockConfiguration:
          BlockPublicAcls: false
          BlockPublicPolicy: false
          IgnorePublicAcls: false
          RestrictPublicBuckets: false

    RDSInstance:
      Type: AWS::RDS::DBInstance
      Properties:
        DBInstanceIdentifier: !Sub '${AWS::StackName}-db'
        Engine: mysql
        EngineVersion: 8.0.35
        DBInstanceClass: db.t3.micro
        AllocatedStorage: 20
        MasterUsername: laravel
        MasterUserPassword: laravelpass
        PubliclyAccessible: true
        BackupRetentionPeriod: 0
        DeletionProtection: false
        MultiAZ: false
        AutoMinorVersionUpgrade: true

    LaravelQueue:
      Type: AWS::SQS::Queue
      Properties:
        QueueName: laravel-queue

  Outputs:
    RDSInstanceEndpoint:
      Value: !GetAtt RDSInstance.Endpoint.Address
    S3Bucket:
      Value: !Ref S3Bucket
    LaravelQueueUrl:
      Value: !Ref LaravelQueue

custom:
  apiGatewayBaseUrl: xyz123abc.execute-api.ap-south-1.amazonaws.com
```

---

## 🌐 .env.production Example

```dotenv
APP_NAME=Serverless-App
APP_ENV=production
APP_KEY=base64:xxxxxx
APP_DEBUG=false
APP_URL=https://placeholder-url.com

LOG_CHANNEL=stderr
LOG_LEVEL=info

DB_CONNECTION=mysql
DB_HOST=placeholder-db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=placeholder-pass

QUEUE_CONNECTION=sqs
SQS_PREFIX=https://sqs.ap-south-1.amazonaws.com/your-account-id
SQS_QUEUE=laravel-queue

FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=placeholder-key
AWS_SECRET_ACCESS_KEY=placeholder-secret
AWS_DEFAULT_REGION=ap-south-1
AWS_BUCKET=placeholder-bucket
AWS_USE_PATH_STYLE_ENDPOINT=false
AWS_URL=https://placeholder-bucket.s3.amazonaws.com

SESSION_DRIVER=cookie
CACHE_DRIVER=file

MAIL_MAILER=smtp
MAIL_HOST=mail.mailtest.radixweb.net
MAIL_PORT=587
MAIL_USERNAME=testphp@mailtest.radixweb.net
MAIL_PASSWORD=placeholder-mail-password
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=testmobile@mailtest.radixweb.net
MAIL_FROM_NAME="${APP_NAME}"

GITHUB_CLIENT_ID=placeholder-github-client-id
GITHUB_CLIENT_SECRET=placeholder-github-client-secret
OAUTH_REDIRECT_URL=https://placeholder-url.com/login/github/callback

GOOGLE_CLIENT_ID=placeholder-google-client-id
GOOGLE_CLIENT_SECRET=placeholder-google-client-secret
GOOGLE_REDIRECT=https://placeholder-url.com/login/google/callback

PAYPAL_MODE=sandbox
PAYPAL_SANDBOX_CLIENT_ID=placeholder-paypal-client-id
PAYPAL_SANDBOX_CLIENT_SECRET=placeholder-paypal-client-secret

PASSPORT_PERSONAL_ACCESS_CLIENT_ID=6
PASSPORT_PERSONAL_ACCESS_CLIENT_SECRET=placeholder-passport-client-secret
```

---

## 🚀 GitHub Actions CI/CD Configuration

File: `.github/workflows/deploy.yml`

```yaml
name: Deploy Laravel to AWS via Serverless

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v3

      - name: Set Up PHP
        uses: shivammathur/setup-php@v2
        with:
          php-version: '8.1'
          extensions: mbstring, bcmath, pdo, pdo_mysql

      - name: Set Up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install Serverless Framework
        run: npm install -g serverless

      - name: Set AWS Credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ap-south-1

      - name: Install Laravel & Prepare for Deploy
        working-directory: ./app
        run: |
          cp .env.production .env
          composer install --no-dev --optimize-autoloader
          php artisan config:cache
          php artisan route:cache
          php artisan view:cache

      - name: Deploy with Serverless
        run: serverless deploy
```

---

## ✅ After First Deployment

- Note the API Gateway endpoint shown in the CLI output.
- Update `custom.apiGatewayBaseUrl` in `serverless.yml` with that URL.
- Re-run `serverless deploy` to apply changes.

---

## 📊 Monitoring Your Serverless App

| Component    | AWS Tool/Console         |
|--------------|--------------------------|
| Lambda       | CloudWatch Logs          |
| API Gateway  | API Gateway Console      |
| RDS          | RDS Monitoring Dashboard |
| SQS          | SQS Console              |
| S3           | S3 Management Console    |

---

## 🧪 Testing Your API
Use `curl` or Postman to test endpoints:
```bash
curl https://your-api-gateway.amazonaws.com/api/health
```

---

