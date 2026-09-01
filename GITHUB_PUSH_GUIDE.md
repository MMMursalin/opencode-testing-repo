# GitHub Push Guide

This guide shows how to push a repository to GitHub using OpenCode.

## Prerequisites

1. **GitHub Account** - Create one at github.com
2. **Personal Access Token (PAT)** - Required for HTTPS authentication
   - Generate at: github.com → Settings → Developer settings → Personal access tokens
   - For full repository access, include these scopes:
     - ✅ `repo` (full control of private repositories)
     - ✅ `workflow` (to push GitHub Actions workflows)
3. **Git installed** - Verify with `git --version`

## Steps to Push to GitHub

### 1. Create Your Repository on GitHub

Go to github.com and click "New repository":
- Repository name: `opencode-testing-repo`
- Visibility: Public or Private
- ✅ Initialize with README (optional)
- Click "Create repository"

### 2. Set Up Your Local Repository

```bash
# Navigate to your project directory
cd /path/to/your/project

# Initialize Git (if not already done)
git init

# Add your files
git add .

# Create initial commit
git commit -m "Initial commit"
```

### 3. Add GitHub as Remote

**HTTPS (recommended for beginners):**
```bash
git remote add origin https://github.com/USERNAME/REPO_NAME.git
```

**SSH (advanced, requires SSH key setup):**
```bash
git remote add origin git@github.com:USERNAME/REPO_NAME.git
```

### 4. Push to GitHub

**Using HTTPS with Personal Access Token:**
```bash
git push https://USERNAME:TOKEN@github.com/USERNAME/REPO_NAME.git main
```

Replace:
- `USERNAME` with your GitHub username
- `TOKEN` with your personal access token
- `main` with your branch name if different

**Using SSH (if configured):**
```bash
git push origin main
```

## OpenCode Commands

Here are the OpenCode commands used in this example:

```javascript
// Set remote URL
git remote set-url origin https://github.com/USERNAME/REPO_NAME.git

// Push with token authentication
git push https://USERNAME:TOKEN@github.com/USERNAME/REPO_NAME.git main

// Rename branch from master to main
git branch -m main
```

## Troubleshooting

### "Permission denied (publickey)"
You're using SSH but SSH key isn't configured. Use HTTPS instead.

### "refusing to allow an OAuth App to create or update workflow"
Your token lacks the `workflow` scope. Regenerate with workflow scope enabled.

### "remote: Invalid username or password"
Check that your token has the correct scopes and is being used correctly in the URL.

### "non-fast-forward update"
Your local branch is behind the remote. Pull first:
```bash
git pull origin main
```

## Quick Start Template

For a new project, run these commands:

```bash
# 1. Create project structure
mkdir my-project && cd my-project

# 2. Initialize Git
git init

# 3. Add some files (README, source code, etc.)
# ... create your files ...

# 4. Commit
git add .
git commit -m "Initial commit"

# 5. Add remote (replace with your GitHub info)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 6. Push (replace with your token)
git push https://YOUR_USERNAME:YOUR_TOKEN@github.com/YOUR_USERNAME/YOUR_REPO.git main
```

## Security Notes

- Never commit your GitHub token to the repository
- Use `.gitignore` to exclude sensitive files
- Consider using SSH keys for better security on your local machine
- Revoke tokens you no longer need in GitHub settings