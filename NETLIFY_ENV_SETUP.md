# Netlify Environment Variables Setup

This file contains the environment variables that need to be configured in Netlify dashboard for successful deployment.

## Steps:

1. Go to Netlify Dashboard → Your Site → Site settings → Environment variables
2. Add each variable below by clicking "Add variable"
3. Trigger a new deployment

## Environment Variables:

### Clerk Authentication

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YXJ0aXN0aWMtaGVycmluZy04Ni5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_fG561gdhKkMRCIZkS3hhpw0oitiyPdv4BFEweq7w3q
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

### Supabase

NEXT_PUBLIC_SUPABASE_URL=https://hjvrdnxsiefogdefayle.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqdnJkbnhzaWVmb2dkZWZheWxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NDIxOTksImV4cCI6MjA2NDAxODE5OX0.\_Z5mTFm-03Rq3RkxF5KNpKaAuCd-nnjDnFUZlORAE0Q

### Vapi

NEXT_PUBLIC_VAPI_PUBLIC_KEY=afa83a32-ec7f-428e-9107-c1f08c7987e8

### Sentry

SENTRY_AUTH_TOKEN=sntrys_eyJpYXQiOjE3NDg4NjI2MDEuNTE1MTE5LCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL3VzLnNlbnRyeS5pbyIsIm9yZyI6ImpzLW1hc3RlcnktMngifQ==\_0Ben5BLAMQcXJrXzao3ig2SyBHZBaVaBIqb7bBG2FLE

## Notes:

- These are the same variables from your .env.local file
- Make sure to copy them exactly as shown
- After adding all variables, trigger a new deployment
- Do not commit this file to your repository as it contains sensitive keys
