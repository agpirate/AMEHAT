#!/bin/bash

# setup-dev-environment.sh - Complete development environment setup

set -e

echo "🚀 Setting up professional development environment..."

# Make scripts executable
chmod +x ~/scripts/*.sh

# Create necessary directories
mkdir -p ~/projects ~/scripts ~/temp

# Install essential packages
echo "📦 Installing essential packages..."
sudo apt update
sudo apt install -y \
    git curl wget zip unzip \
    build-essential \
    python3 python3-pip \
    nodejs npm \
    docker.io docker-compose \
    jq tree htop

# Install GitHub CLI
if ! command -v gh &> /dev/null; then
    echo "📦 Installing GitHub CLI..."
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
    sudo apt update
    sudo apt install gh -y
fi

# Configure Git (if not already configured)
if [ -z "$(git config --global user.name)" ]; then
    read -p "Enter your Git username: " GIT_USERNAME
    read -p "Enter your Git email: " GIT_EMAIL
    git config --global user.name "$GIT_USERNAME"
    git config --global user.email "$GIT_EMAIL"
fi

# Install Node Version Manager (NVM)
if [ ! -d "$HOME/.nvm" ]; then
    echo "📦 Installing NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm install --lts
    nvm use --lts
fi

# Reload shell configuration
echo "🔄 Reloading shell configuration..."
source ~/.bashrc

echo ""
echo "🎉 Development environment setup complete!"
echo ""
echo "Available commands:"
echo "  project-status    - Check all project statuses"
echo "  setup-new-project - Create new project with Git"
echo "  git-workflow      - Standardized Git branching"
echo "  create-pr         - Automated PR creation"
echo ""
echo "Next steps:"
echo "1. Run 'gh auth login' to authenticate with GitHub"
echo "2. Run 'project-status' to see current projects"
echo "3. Use 'setup-new-project' for new projects"