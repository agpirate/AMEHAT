//put this worksflows on gitHub - MAIN brach
----------------------------------------
& when there is any 
     + push requests over the given listed branches... the file excuted the job listed.. &
     + pull requests over the given listed branches... the file excuted the job listed.. & 
give results(alerts) to the github account owner [ and this whole watch and excuttions will done by github services]

---------------Triggering point

# Just push code - workflows run automatically
git add .
git commit -m "Fix login bug"
git push origin main

-------------- yml file Excutions steps

# Go to GitHub → Actions → See workflow running
# Automatically:
# 1. GitHub detects the push
# 2. Looks for .github/workflows/*.yml files
# 3. Executes the workflow

# Create Pull Request
# ⬇️ CI workflow automatically runs
# ✅ All checks pass
# ✅ Team reviews code
# ✅ Merge to main
# ⬇️ CD workflow automatically deploys