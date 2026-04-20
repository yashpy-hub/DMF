# Deploying to Vercel

This project is configured to be deployed as a static site on Vercel.

## Deployment Steps

1.  Push the code to a GitHub/GitLab/Bitbucket repository.
2.  Import the project in Vercel.
3.  Vercel should automatically detect the settings from `vercel.json`.
    -   **Framework Preset:** Vite
    -   **Build Command:** `pnpm run build`
    -   **Output Directory:** `dist/public`

## Environment Variables

Ensure you set the following environment variables in your Vercel project settings:

### EmailJS (Required for Contact Form)
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

### Other (Optional)
- `VITE_FRONTEND_FORGE_API_KEY`
- `VITE_FRONTEND_FORGE_API_URL`

## Local Preview
To test the production build locally:
```bash
pnpm run build
pnpm run preview
```
