#!/bin/bash

# React Documentation Update Script
# Commits and pushes changes to GitHub Pages

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📚 Updating React Documentation...${NC}"
echo ""

# Check if there are changes
if [[ -z $(git status -s) ]]; then
  echo "No changes to commit."
  exit 0
fi

# Show what will be committed
echo "Changes to commit:"
git status -s
echo ""

# Stage all changes
git add .

# Commit with default message
git commit -m "Docs: Update documentation"

# Push to GitHub
echo ""
echo -e "${BLUE}Pushing to GitHub...${NC}"
git push

echo ""
echo -e "${GREEN}✅ Documentation updated successfully!${NC}"
echo ""
echo "Your changes will be live in ~1 minute at:"
echo "https://mograph-tools.github.io/react-docs/"
echo ""
