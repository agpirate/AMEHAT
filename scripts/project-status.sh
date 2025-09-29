#!/bin/bash

# project-status.sh - Check status of all projects

set -e

PROJECTS_DIR="$HOME/projects"

echo "📊 Project Status Report"
echo "========================"
echo ""

for PROJECT in "$PROJECTS_DIR"/*; do
    if [ -d "$PROJECT" ] && [ -d "$PROJECT/.git" ]; then
        PROJECT_NAME=$(basename "$PROJECT")
        cd "$PROJECT"
        
        BRANCH=$(git branch --show-current 2>/dev/null)
        AHEAD=$(git rev-list --count HEAD..origin/$BRANCH 2>/dev/null || echo "0")
        BEHIND=$(git rev-list --count origin/$BRANCH..HEAD 2>/dev/null || echo "0")
        UNCOMMITTED=$(git status --porcelain | wc -l)
        
        echo "📁 $PROJECT_NAME"
        echo "   🌿 Branch: $BRANCH"
        echo "   📈 Ahead: $AHEAD, Behind: $BEHIND"
        echo "   📝 Uncommitted: $UNCOMMITTED"
        
        if [ "$UNCOMMITTED" -gt 0 ]; then
            echo "   ⚠️  Uncommitted changes present"
        fi
        
        echo ""
    fi
done

echo "✅ Status check complete"