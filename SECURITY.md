# Security Guidelines

## Environment Variables

### Never commit sensitive data

- **NEVER** commit `.env` files to version control
- **NEVER** hardcode API keys, tokens, or secrets in source code
- **ALWAYS** use environment variables for sensitive configuration

### Setting up environment variables

1. Copy the example file:

   ```bash
   cp env.example .env
   ```

2. Fill in your actual values in the `.env` file

3. For frontend development:
   ```bash
   cd frontend
   cp env.example .env
   # Fill in your values
   ```

### Environment variable naming

- Use `VITE_` prefix for variables that need to be accessible in the browser
- Use descriptive names: `VITE_TMDB_API_KEY` not `VITE_KEY`
- Document all environment variables in this file

## API Keys and Tokens

### TMDB API

- Get your API key from [TMDB](https://www.themoviedb.org/settings/api)
- Store as `VITE_TMDB_API_KEY` in your `.env` file

### Supabase

- Get your URL and anon key from your Supabase project settings
- Store as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`

## Build Process

### Preventing secrets in builds

- Environment variables are injected at build time
- Never include `.env` files in your build output
- Use build-time environment variable substitution

### GitHub Actions / CI/CD

- Store secrets in GitHub Secrets, not in code
- Use environment variables in your workflow files
- Never log or expose secrets in build logs

## Code Review Checklist

Before committing, ensure:

- [ ] No hardcoded API keys or tokens
- [ ] No `.env` files in the commit
- [ ] All sensitive data uses environment variables
- [ ] Build output doesn't contain secrets
- [ ] No secrets in console.log statements

## Incident Response

If secrets are accidentally committed:

1. **Immediately** rotate/regenerate the exposed secrets
2. Remove the secrets from git history using `git filter-branch` or BFG Repo-Cleaner
3. Force push to update the remote repository
4. Notify team members to pull the updated history
5. Review and update security practices

## Tools

### Pre-commit hooks

Consider using tools like:

- `gitleaks` - Detect secrets in commits
- `husky` - Git hooks for pre-commit checks
- `dotenv-check` - Validate environment variables

### Example pre-commit hook

```bash
#!/bin/sh
# Check for secrets before commit
if gitleaks protect --staged; then
  echo "No secrets detected"
else
  echo "Secrets detected! Commit blocked."
  exit 1
fi
```
