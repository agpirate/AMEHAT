#!/bin/bash

echo "🚀 Setting up development environment for [Project Name]"

# Check prerequisites
echo "📋 Checking prerequisites..."
if ! command -v git &> /dev/null; then
    echo "❌ Git not found. Installing..."
    sudo apt update && sudo apt install -y git
fi

if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Installing..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Setup Git (if not configured)
if [ -z "$(git config --global user.name)" ]; then
    read -p "Enter your Git name: " git_name
    read -p "Enter your Git email: " git_email
    git config --global user.name "$git_name"
    git config --global user.email "$git_email"
fi

# Setup SSH Key
echo "🔑 Setting up SSH key for GitHub..."
if [ ! -f ~/.ssh/id_ed25519 ]; then
    echo "Generating new SSH key..."
    ssh-keygen -t ed25519 -C "$git_email" -f ~/.ssh/id_ed25519 -N ""
    
    # Start SSH agent and add key
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519
fi

# Display public key
echo ""
echo "📋 YOUR SSH PUBLIC KEY:"
echo "========================"
cat ~/.ssh/id_ed25519.pub
echo "========================"
echo ""
echo "📝 INSTRUCTIONS:"
echo "1. Go to https://github.com/settings/keys"
echo "2. Click 'New SSH key'"
echo "3. Paste the above key"
echo "4. Click 'Add SSH key'"
echo ""
read -p "Press Enter after you've added the SSH key to GitHub..."

# Test SSH connection
echo "Testing SSH connection to GitHub..."
ssh -T git@github.com

# Clone the project
echo "📦 Cloning project..."
git clone git@github.com:your-username/your-repo-name.git
cd your-repo-name

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Setup environment
echo "⚙️ Setting up development environment..."
cp .env.example .env.local
echo "Please update .env.local with your development values"

echo ""
echo "🎉 Setup complete!"
echo "📁 Project location: $(pwd)"
echo "🚀 Start development: npm run dev"