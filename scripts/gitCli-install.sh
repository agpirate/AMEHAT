#!/bin/bash

# github-setup.sh - Setup GitHub CLI and authentication

set -e

echo "🔧 Setting up System GitHub CLI..."

# Function to check if GitHub CLI is installed
check_gh_installed() {
    if command -v gh &> /dev/null; then
        echo "✅ GitHub CLI is already installed: $(gh --version | head -n 1)"
        return 0
    else
        return 1
    fi
}

# Function to install via APT (original method)
install_gh_apt() {
    echo "📦 Attempting installation via APT repository..."
    curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
    sudo apt update
    sudo apt install gh -y
}

# Function to install via .deb package (fallback method)
install_gh_deb() {
    local GH_VERSION="2.52.1"
    echo "📥 Downloading GitHub CLI v${GH_VERSION} via .deb package..."
    
    if wget -q --show-progress "https://github.com/cli/cli/releases/download/v${GH_VERSION}/gh_${GH_VERSION}_linux_amd64.deb" -O "/tmp/gh_${GH_VERSION}.deb"; then
        echo "🔧 Installing .deb package..."
        sudo dpkg -i "/tmp/gh_${GH_VERSION}.deb" || sudo apt-get install -f -y
        rm -f "/tmp/gh_${GH_VERSION}.deb"
        return 0
    else
        echo "❌ Failed to download .deb package"
        return 1
    fi
}

# Function to install via binary (manual method)
install_gh_binary() {
    local GH_VERSION="2.52.1"
    echo "📥 Downloading GitHub CLI v${GH_VERSION} binary..."
    
    if wget -q --show-progress "https://github.com/cli/cli/releases/download/v${GH_VERSION}/gh_${GH_VERSION}_linux_amd64.tar.gz" -O "/tmp/gh_${GH_VERSION}.tar.gz"; then
        echo "📦 Extracting binary..."
        tar -xzf "/tmp/gh_${GH_VERSION}.tar.gz" -C /tmp/
        sudo cp "/tmp/gh_${GH_VERSION}_linux_amd64/bin/gh" /usr/local/bin/
        sudo chmod +x /usr/local/bin/gh
        rm -rf "/tmp/gh_${GH_VERSION}.tar.gz" "/tmp/gh_${GH_VERSION}_linux_amd64"
        return 0
    else
        echo "❌ Failed to download binary package"
        return 1
    fi
}

# Function to install via Snap
install_gh_snap() {
    echo "📦 Attempting installation via Snap..."
    if command -v snap &> /dev/null; then
        sudo snap install gh
        return 0
    else
        echo "❌ Snap not available on this system"
        return 1
    fi
}

# Main installation logic
if ! check_gh_installed; then
    echo "📦 GitHub CLI not found. Installing..."
    
    # Try installation methods in order of preference
    if install_gh_apt; then
        echo "✅ Successfully installed via APT"
    elif install_gh_deb; then
        echo "✅ Successfully installed via .deb package"
    elif install_gh_snap; then
        echo "✅ Successfully installed via Snap"
    elif install_gh_binary; then
        echo "✅ Successfully installed via binary"
    else
        echo "❌ All installation methods failed!"
        echo "💡 Please check your internet connection and try again manually:"
        echo "   Visit: https://github.com/cli/cli/releases"
        exit 1
    fi
    
    # Verify installation
    if check_gh_installed; then
        echo "✅ GitHub CLI installation verified!"
    else
        echo "❌ Installation may have failed - gh command not found"
        exit 1
    fi
fi

