#!/bin/bash

# Security Check Script
# This script helps ensure no secrets are committed to the repository

set -e

echo "🔒 Running security checks..."

# Check if gitleaks is installed
if ! command -v gitleaks &> /dev/null; then
    echo "❌ gitleaks is not installed. Please install it first:"
    echo "   brew install gitleaks"
    echo "   or visit: https://github.com/gitleaks/gitleaks"
    exit 1
fi

# Run gitleaks check
echo "🔍 Checking for secrets in staged files..."
if gitleaks protect --staged --config scripts/.gitleaks.toml; then
    echo "✅ No secrets detected in staged files"
else
    echo "❌ Secrets detected in staged files!"
    echo "   Please remove secrets before committing."
    exit 1
fi

# Check for .env files in staging
echo "🔍 Checking for .env files in staging..."
if git diff --cached --name-only | grep -E "\.env$|\.env\."; then
    echo "❌ .env files detected in staging!"
    echo "   Please remove .env files from staging:"
    echo "   git reset HEAD <file>"
    exit 1
else
    echo "✅ No .env files in staging"
fi

# Check for hardcoded API keys in staged files
echo "🔍 Checking for hardcoded API keys..."
if git diff --cached | grep -E "(api[_-]?key|access[_-]?token|secret)" -i; then
    echo "⚠️  Potential API keys detected in staged changes!"
    echo "   Please review and ensure these are not actual secrets."
    echo "   Consider using environment variables instead."
else
    echo "✅ No obvious API keys detected"
fi

echo "🎉 Security checks passed!"
