#!/bin/bash

# setup-new-project.sh - Automated project initialization

set -e  # Exit on any error

echo "🚀 Setting up new project..."

# Get project name from user
read -p "Enter project name: " PROJECT_NAME
read -p "Enter GitHub repository URL (optional): " GITHUB_URL

# Create project directory
mkdir -p "$HOME/projects/$PROJECT_NAME"
cd "$HOME/projects/$PROJECT_NAME"

# Initialize Git repository
git init
git branch -M main

# Create standard project structure
mkdir -p src/components src/utils src/hooks src/types tests docs

# Create basic files
cat > .gitignore << EOF
# Dependencies
node_modules/
/.pnp
.pnp.js

# Production
/build
/dist

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Dependency directories
node_modules/
jspm_packages/

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
EOF

cat > README.md << EOF
# $PROJECT_NAME

## Description
Brief description of your project.

## Development Setup
\`\`\`bash
npm install
npm run dev
\`\`\`

## Scripts
- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run test\` - Run tests
- \`npm run lint\` - Lint code
\`\`\`
EOF

# Create package.json if it doesn't exist
if [ ! -f package.json ]; then
    cat > package.json << EOF
{
  "name": "$PROJECT_NAME",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "echo 'Add your dev command'",
    "build": "echo 'Add your build command'",
    "test": "echo 'Add your test command'",
    "lint": "echo 'Add your lint command'"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
EOF
fi

# Initial commit
git add .
git commit -m "Initial commit: Project setup"

# Connect to GitHub if URL provided
if [ -n "$GITHUB_URL" ]; then
    git remote add origin "$GITHUB_URL"
    echo "✅ Connected to GitHub repository"
    
    # Push to GitHub
    read -p "Push to GitHub? (y/n): " PUSH_CONFIRM
    if [ "$PUSH_CONFIRM" = "y" ]; then
        git push -u origin main
        echo "✅ Pushed to GitHub"
    fi
fi

echo "🎉 Project $PROJECT_NAME setup complete!"
echo "📁 Location: $HOME/projects/$PROJECT_NAME"