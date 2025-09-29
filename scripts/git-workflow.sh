#!/bin/bash

# git-workflow.sh - Standardized Git workflow

set -e

function show_usage() {
    echo "Usage: $0 [feature|fix|hotfix|release] [branch-name] [description]"
    echo "Examples:"
    echo "  $0 feature user-authentication \"Add user login system\""
    echo "  $0 fix button-styling \"Fix primary button colors\""
}

BRANCH_TYPE=$1
BRANCH_NAME=$2
DESCRIPTION=$3

if [ -z "$BRANCH_TYPE" ] || [ -z "$BRANCH_NAME" ] || [ -z "$DESCRIPTION" ]; then
    show_usage
    exit 1
fi

# Validate branch type
case $BRANCH_TYPE in
    feature|fix|hotfix|release)
        ;;
    *)
        echo "❌ Error: Branch type must be one of: feature, fix, hotfix, release"
        exit 1
        ;;
esac

# Create branch name with timestamp
TIMESTAMP=$(date +%Y%m%d-%H%M)
BRANCH_FULL_NAME="${BRANCH_TYPE}/${BRANCH_NAME}-${TIMESTAMP}"

echo "🚀 Starting new $BRANCH_TYPE branch: $BRANCH_FULL_NAME"

# Ensure we're on main and up to date
git checkout main
git pull origin main

# Create new branch
git checkout -b "$BRANCH_FULL_NAME"

echo "✅ Created branch: $BRANCH_FULL_NAME"
echo "📝 Description: $DESCRIPTION"
echo ""
echo "Next steps:"
echo "1. Make your changes"
echo "2. Use 'git add .' to stage changes"
echo "3. Use 'git commit -m \"Your message\"' to commit"
echo "4. Use 'git push origin $BRANCH_FULL_NAME' to push"