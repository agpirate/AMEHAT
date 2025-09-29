#!/bin/bash

# create-pr.sh - Automated PR creation

set -e

BRANCH_NAME=$(git branch --show-current)

if [ "$BRANCH_NAME" = "main" ]; then
    echo "❌ Cannot create PR from main branch"
    exit 1
fi

echo "📝 Creating PR for branch: $BRANCH_NAME"

# Push branch if not already pushed
if ! git rev-parse --abbrev-ref @{u} > /dev/null 2>&1; then
    echo "📤 Pushing branch to remote..."
    git push -u origin "$BRANCH_NAME"
fi

# Extract branch type and description from branch name
BRANCH_TYPE=$(echo "$BRANCH_NAME" | cut -d'/' -f1)
TICKET_ID=$(echo "$BRANCH_NAME" | cut -d'/' -f2 | cut -d'-' -f1)

# Create PR title and body
PR_TITLE="$BRANCH_TYPE: $(git log -1 --pretty=format:%s)"
PR_BODY="## Description
$(git log -1 --pretty=format:%b)

## Changes
- [ ] Feature complete
- [ ] Tests added
- [ ] Documentation updated

## Branch
\`$BRANCH_NAME\`

## Checklist
- [ ] Code reviewed
- [ ] Tests passing
- [ ] No console errors
"

echo "📋 PR Title: $PR_TITLE"
echo ""

# Create PR using GitHub CLI
gh pr create \
    --title "$PR_TITLE" \
    --body "$PR_BODY" \
    --base main \
    --assignee "@me" \
    --label "$BRANCH_TYPE" \
    --reviewer "team-lead"

echo "✅ PR created successfully!"