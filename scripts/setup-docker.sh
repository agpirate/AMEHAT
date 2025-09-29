#!/bin/bash
# setup-with-docker.sh

echo "🚀 Setting up with Docker..."

# Install Docker if not present
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    echo "✅ Docker installed. Please logout and login again."
    exit 0
fi

# Clone project using SSH
git clone git@github.com:your-username/your-repo.git
cd your-repo

# Start development environment
docker-compose -f docker-compose.dev.yml up

echo "✅ Development environment ready!"
echo "📱 Metro bundler running on: http://localhost:8081"