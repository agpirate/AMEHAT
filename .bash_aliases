# 🎯 Git Shortcuts
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gcm='git commit -m'
alias gca='git commit --amend'
alias gco='git checkout'
alias gcb='git checkout -b'
alias gp='git push'
alias gpf='git push --force-with-lease'
alias gpl='git pull'
alias gfm='git fetch origin main:main'
alias grb='git rebase'
alias grbc='git rebase --continue'
alias grba='git rebase --abort'
alias gst='git stash'
alias gstp='git stash pop'
alias gl='git log --oneline --graph -10'
alias gd='git diff'
alias gdc='git diff --cached'

# 🚀 Enhanced Git Commands
alias gcleanup='git branch --merged main | grep -v "main" | xargs git branch -d'
alias gprune='git fetch --prune && git branch -r | awk "{print \$1}" | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | awk "{print \$1}" | xargs git branch -d'
alias gsync='git fetch origin && git rebase origin/main'
alias gundo='git reset --soft HEAD~1'
alias gwip='git add -A && git commit -m "WIP"'
alias gunwip='git log -n 1 | grep -q -c "WIP" && git reset HEAD~1'

# 📊 Git Statistics
alias gstats='git shortlog -sn --all'
alias gcontrib='git log --format="%aN" | sort -u'
alias gtoday='git log --since="midnight" --oneline --author="$(git config user.name)"'

# 🐳 Docker + Git
alias dc='docker-compose'
alias dcup='docker-compose up'
alias dcdown='docker-compose down'
alias dclogs='docker-compose logs -f'

# 🎯 Project Navigation
alias projects='cd ~/projects'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# 📁 Enhanced Listing
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias lt='ls -laht'

# 🔧 System Monitoring
alias cpu='top -o cpu'
alias mem='top -o rsize'
alias ports='netstat -tulanp'
alias disk='df -h'

# 🛠️ Development
alias nrd='npm run dev'
alias nrb='npm run build'
alias nrt='npm run test'
alias nrl='npm run lint'