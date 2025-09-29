#!/bin/bash

# git-workflow.sh - Professional Git Workflow with CI/CD Integration

set -e

# Configuration - Customize these defaults
DEFAULT_BRANCH="${DEFAULT_BRANCH:-main}"
FEATURE_PREFIX="${FEATURE_PREFIX:-feature/}"
BUGFIX_PREFIX="${BUGFIX_PREFIX:-bugfix/}"
HOTFIX_PREFIX="${HOTFIX_PREFIX:-hotfix/}"
DEVELOP_BRANCH="${DEVELOP_BRANCH:-develop}"
REMOTE="${REMOTE:-origin}"
AUTO_PR="${AUTO_PR:-true}"
RUN_TESTS="${RUN_TESTS:-false}"
TEST_COMMAND="${TEST_COMMAND:-npm test }"
VALIDATE_BRANCH_NAME="${VALIDATE_BRANCH_NAME:-true}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Print functions
print_info() { echo -e "${BLUE}ℹ️  $1${NC}"; }
print_success() { echo -e "${GREEN}✅ $1${NC}"; }
print_warning() { echo -e "${YELLOW}⚠️  $1${NC}"; }
print_error() { echo -e "${RED}❌ $1${NC}"; }
print_step() { echo -e "${PURPLE}🔹 $1${NC}"; }
print_header() { echo -e "${CYAN}🌟 $1${NC}"; }

# Validate branch name
validate_branch_name() {
    local branch_name="$1"
    local pattern="^(feature|bugfix|hotfix|release)\/[a-z0-9-]+$"
    
    if [[ ! "$branch_name" =~ $pattern ]]; then
        print_error "Invalid branch name: $branch_name"
        print_info "Branch names should follow: feature/name, bugfix/name, hotfix/name"
        print_info "Examples: feature/payment-integration, bugfix/login-validation"
        return 1
    fi
    return 0
}

# Check if we're in a git repository
check_git_repo() {
    if ! git rev-parse --git-dir > /dev/null 2>&1; then
        print_error "Not a git repository"
        exit 1
    fi
}

# Run tests if configured
run_tests() {
    if [ "$RUN_TESTS" = "true" ] && [ -n "$TEST_COMMAND" ]; then
        print_step "Running tests: $TEST_COMMAND"
        if eval "$TEST_COMMAND"; then
            print_success "Tests passed"
        else
            print_error "Tests failed. Aborting workflow."
            exit 1
        fi
    fi
}

# Get current branch name
get_current_branch() {
    git branch --show-current
}

# Start a new feature
start_feature() {
    local feature_name="$1"
    local branch_name="${FEATURE_PREFIX}${feature_name}"
    
    print_header "Starting New Feature: $feature_name"
    
    if [ "$VALIDATE_BRANCH_NAME" = "true" ]; then
        validate_branch_name "$branch_name" || exit 1
    fi
    
    check_git_repo
    
    print_step "Creating feature branch: $branch_name"
    git checkout -b "$branch_name"
    
    print_success "Feature branch '$branch_name' created and checked out"
    print_info "Start developing your feature. When ready, run: ./git-workflow.sh complete-feature '$feature_name'"
}

# Complete a feature
complete_feature() {
    local feature_name="$1"
    local branch_name="${FEATURE_PREFIX}${feature_name}"
    local current_branch=$(get_current_branch)
    local commit_message="${2:-"Add $feature_name"}"
    
    print_header "Completing Feature: $feature_name"
    
    check_git_repo
    
    # Ensure we're on the correct branch
    if [ "$current_branch" != "$branch_name" ]; then
        print_warning "Not on feature branch '$branch_name'. Switching..."
        git checkout "$branch_name"
    fi
    
    print_step "Running final checks..."
    run_tests
    
    print_step "Adding changes to git..."
    git add .
    
    print_step "Committing changes..."
    git commit -m "$commit_message" || {
        print_warning "No changes to commit or commit was cancelled"
    }
    
    print_step "Pushing to remote repository..."
    git push -u "$REMOTE" "$branch_name"
    
    print_success "Feature '$feature_name' pushed to remote"
    
    # Create PR if enabled
    if [ "$AUTO_PR" = "true" ] && command -v gh &> /dev/null; then
        create_pr "$feature_name" "$branch_name"
    else
        print_info "Create a Pull Request:"
        print_info "  Visit: $(git remote get-url "$REMOTE" | sed 's/\.git$//')/compare/$branch_name?expand=1"
        print_info "Or use: gh pr create --base $DEFAULT_BRANCH --head $branch_name --title \"Add $feature_name\" --body \"## Description\\n\\nImplements $feature_name\""
    fi
    
    print_info "After PR approval and merge, run: ./git-workflow.sh cleanup-feature '$feature_name'"
}

# Create Pull Request
create_pr() {
    local feature_name="$1"
    local branch_name="$2"
    
    if ! gh auth status &>/dev/null; then
        print_warning "GitHub CLI not authenticated. Skipping auto PR creation."
        return 1
    fi
    
    print_step "Creating Pull Request..."
    gh pr create \
        --base "$DEFAULT_BRANCH" \
        --head "$branch_name" \
        --title "Add $feature_name" \
        --body "## Description

Implements $feature_name

## Changes
- [ ] Feature implementation
- [ ] Tests added
- [ ] Documentation updated

## Testing
- [ ] All tests pass
- [ ] Manual testing completed" \
        --web
}

# Cleanup feature branch
cleanup_feature() {
    local feature_name="$1"
    local branch_name="${FEATURE_PREFIX}${feature_name}"
    
    print_header "Cleaning up Feature: $feature_name"
    
    check_git_repo
    
    print_step "Switching to $DEFAULT_BRANCH..."
    git checkout "$DEFAULT_BRANCH"
    
    print_step "Pulling latest changes..."
    git pull "$REMOTE" "$DEFAULT_BRANCH"
    
    print_step "Deleting local branch..."
    git branch -d "$branch_name" || print_warning "Could not delete local branch (may already be merged)"
    
    print_step "Deleting remote branch..."
    git push "$REMOTE" --delete "$branch_name" || print_warning "Could not delete remote branch"
    
    print_success "Feature cleanup completed"
}

# Hotfix workflow
start_hotfix() {
    local hotfix_name="$1"
    local branch_name="${HOTFIX_PREFIX}${hotfix_name}"
    
    print_header "Starting Hotfix: $hotfix_name"
    
    check_git_repo
    
    print_step "Creating hotfix branch from $DEFAULT_BRANCH..."
    git checkout "$DEFAULT_BRANCH"
    git pull "$REMOTE" "$DEFAULT_BRANCH"
    git checkout -b "$branch_name"
    
    print_success "Hotfix branch '$branch_name' created"
}

# Bugfix workflow
start_bugfix() {
    local bugfix_name="$1"
    local branch_name="${BUGFIX_PREFIX}${bugfix_name}"
    
    print_header "Starting Bugfix: $bugfix_name"
    
    check_git_repo
    
    print_step "Creating bugfix branch from $DEFAULT_BRANCH..."
    git checkout "$DEFAULT_BRANCH"
    git pull "$REMOTE" "$DEFAULT_BRANCH"
    git checkout -b "$branch_name"
    
    print_success "Bugfix branch '$branch_name' created"
}

# Show current workflow status
status() {
    print_header "Git Workflow Status"
    
    check_git_repo
    
    local current_branch=$(get_current_branch)
    local remote_url=$(git remote get-url "$REMOTE" 2>/dev/null || echo "Not set")
    
    print_info "Current branch: $current_branch"
    print_info "Remote: $REMOTE ($remote_url)"
    print_info "Default branch: $DEFAULT_BRANCH"
    
    # Show recent branches
    print_step "Recent branches:"
    git branch --list "${FEATURE_PREFIX}*" "${BUGFIX_PREFIX}*" "${HOTFIX_PREFIX}*" | head -10
    
    # Show un-pushed commits
    local unpushed=$(git log "@{u}.." --oneline 2>/dev/null | wc -l)
    if [ "$unpushed" -gt 0 ]; then
        print_warning "You have $unpushed unpushed commits"
    fi
}

# Show usage
usage() {
    cat << EOF
Usage: $0 <command> [options]

Commands:
  start-feature <name>     Start a new feature branch
  complete-feature <name>  Complete and push a feature
  cleanup-feature <name>   Cleanup after feature merge
  start-bugfix <name>      Start a new bugfix branch
  start-hotfix <name>      Start a new hotfix branch
  status                   Show current workflow status
  config                   Show current configuration

Examples:
  $0 start-feature payment-integration
  $0 complete-feature payment-integration
  $0 complete-feature payment-integration "Add payment integration with Stripe"
  $0 cleanup-feature payment-integration

Environment Variables (customize defaults):
  DEFAULT_BRANCH=${DEFAULT_BRANCH}
  FEATURE_PREFIX=${FEATURE_PREFIX}
  RUN_TESTS=${RUN_TESTS}
  TEST_COMMAND="${TEST_COMMAND}"
  AUTO_PR=${AUTO_PR}
EOF
}

# Show configuration
show_config() {
    print_header "Current Configuration"
    print_info "DEFAULT_BRANCH: $DEFAULT_BRANCH"
    print_info "FEATURE_PREFIX: $FEATURE_PREFIX"
    print_info "BUGFIX_PREFIX: $BUGFIX_PREFIX"
    print_info "HOTFIX_PREFIX: $HOTFIX_PREFIX"
    print_info "DEVELOP_BRANCH: $DEVELOP_BRANCH"
    print_info "REMOTE: $REMOTE"
    print_info "AUTO_PR: $AUTO_PR"
    print_info "RUN_TESTS: $RUN_TESTS"
    print_info "TEST_COMMAND: $TEST_COMMAND"
    print_info "VALIDATE_BRANCH_NAME: $VALIDATE_BRANCH_NAME"
}

# Main command handler
main() {
    local command="$1"
    local arg1="$2"
    local arg2="$3"
    
    case "$command" in
        start-feature|feature)
            if [ -z "$arg1" ]; then
                print_error "Feature name required"
                usage
                exit 1
            fi
            start_feature "$arg1"
            ;;
        complete-feature|complete)
            if [ -z "$arg1" ]; then
                print_error "Feature name required"
                usage
                exit 1
            fi
            complete_feature "$arg1" "$arg2"
            ;;
        cleanup-feature|cleanup)
            if [ -z "$arg1" ]; then
                print_error "Feature name required"
                usage
                exit 1
            fi
            cleanup_feature "$arg1"
            ;;
        start-bugfix|bugfix)
            if [ -z "$arg1" ]; then
                print_error "Bugfix name required"
                usage
                exit 1
            fi
            start_bugfix "$arg1"
            ;;
        start-hotfix|hotfix)
            if [ -z "$arg1" ]; then
                print_error "Hotfix name required"
                usage
                exit 1
            fi
            start_hotfix "$arg1"
            ;;
        status)
            status
            ;;
        config)
            show_config
            ;;
        help|--help|-h)
            usage
            ;;
        *)
            print_error "Unknown command: $command"
            usage
            exit 1
            ;;
    esac
}

# Run main function with all arguments
main "$@"