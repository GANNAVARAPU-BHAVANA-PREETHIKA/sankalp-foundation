# Sankalp Foundation Deployment

This project is configured for a single Render Web Service that serves both the frontend and backend.

| Setting | Value |
|---------|-------|
| Root Directory | `/` |
| Build Command | `npm run render-build` |
| Start Command | `npm start` |

What Render does:
1. Installs root dependencies.
2. Installs backend dependencies.
3. Builds the Vite frontend into `dist/`.
4. Starts the Express backend from `backend/server.js`.
5. Serves the API and frontend from the same domain.

Required environment variables:

```env
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
ADMIN_EMAIL=...
```

Notes:
- Do not set `PORT` manually on Render.
- Do not set `VITE_API_BASE_URL` on Render.
- For local frontend development, you can set `VITE_API_BASE_URL=http://localhost:5000`.

Health check endpoint:

`/api/health`
