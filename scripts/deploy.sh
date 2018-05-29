# WIP: here's the desired workflow

# Initial setup to clone gh-pages into public/
git worktree add public gh-pages

# Clean & rebuild
rm -rf public/*
npm run build

# Commit and push the gh-pages changes
cd public && git add --all && git commit -m "New build" && git push && cd ..