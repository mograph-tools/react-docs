#!/bin/bash

# React Documentation Update Script
# Commits to main repo, then deploys docs-site/ to mograph-tools/react-docs

GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

DOCS_REMOTE="https://github.com/mograph-tools/react-docs.git"

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

# Stage all changes and commit to main repo
git add .
git commit -m "Docs: Update documentation"

echo ""
echo -e "${BLUE}Pushing to main repo...${NC}"
git push

# Deploy docs-site/ subtree to mograph-tools/react-docs
echo ""
echo -e "${BLUE}Deploying docs to mograph-tools/react-docs...${NC}"
git subtree split --prefix docs-site --branch temp-docs-deploy
git push --force "$DOCS_REMOTE" temp-docs-deploy:main
PUSH_RESULT=$?
git branch -D temp-docs-deploy

if [ $PUSH_RESULT -eq 0 ]; then
  echo ""
  echo -e "${GREEN}✅ Documentation updated successfully!${NC}"
  echo ""
  echo "Your changes will be live in ~1 minute at:"
  echo "https://mograph-tools.github.io/react-docs/"
  echo ""
else
  echo ""
  echo -e "${RED}❌ Deploy to mograph-tools/react-docs failed.${NC}"
  echo "Changes were committed to main repo. Check remote access."
  echo ""
  exit 1
fi
