# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Repository Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**

### 2. Update Base Path
1. Open `vite.config.ts`
2. Replace `your-repo-name` with your actual repository name:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/your-actual-repo-name/' : '/',
   ```

### 3. Enable GitHub Actions
1. The workflow file `.github/workflows/deploy.yml` is already configured
2. Push changes to `main` or `master` branch to trigger deployment
3. Check the **Actions** tab to monitor deployment progress

## How It Works

### Build Process
1. **TypeScript Compilation**: Vite automatically transpiles TypeScript to JavaScript
2. **Asset Optimization**: CSS and JavaScript are minified and optimized
3. **Static Generation**: All files are bundled into the `dist` folder

### Jekyll Compatibility
- `.nojekyll` file prevents Jekyll from processing the site
- This allows files starting with `_` and proper routing

### Workflow Features
- ✅ Automatic deployment on push to main/master
- ✅ Manual deployment trigger available
- ✅ Node.js 18 with npm caching
- ✅ TypeScript → JavaScript transpilation
- ✅ Jekyll bypass for proper React routing
- ✅ Optimized build artifacts

## URLs
- **Production**: `https://username.github.io/repository-name/`
- **Development**: `http://localhost:8080`

## Troubleshooting

### Common Issues
1. **404 on refresh**: Ensure `.nojekyll` file exists in public folder
2. **Assets not loading**: Check the `base` path in `vite.config.ts`
3. **Build fails**: Verify all TypeScript errors are resolved

### Manual Deployment
If automatic deployment fails, you can trigger it manually:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Project Structure
```
├── .github/workflows/deploy.yml  # GitHub Actions workflow
├── public/.nojekyll              # Jekyll bypass
├── src/                          # TypeScript source code
├── dist/                         # Built JavaScript (generated)
└── vite.config.ts               # Build configuration
```