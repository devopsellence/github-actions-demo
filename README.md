# GitHub Actions Demo

A simple React app demonstrating deployment using [devopsellence](https://www.devopsellence.com) GitHub Action.

## How it works

Push to `main` and the [deploy-action](https://github.com/devopsellence/deploy-action) automatically builds, pushes, and deploys your Docker image to a public HTTPS domain.

## Setup

1. Create a project at [devopsellence.com/setup/github-actions](https://www.devopsellence.com/setup/github-actions)
2. Add `DEVOPSELLENCE_TOKEN` to your GitHub repo secrets
3. Update the project name in `.github/workflows/deploy.yml`

## Local development

```bash
npm install
npm run dev
```

## Build Docker image

```bash
docker build -t demo-app .
docker run -p 3000:3000 demo-app
```
