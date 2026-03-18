# Sankalp Full-Stack Single Deploy

**Single Render Web Service** (Frontend + Backend):

| Setting | Value |
|---------|-------|
| **Root Directory** | `/` |
| **Build** | `npm install && cd backend && npm install && cd .. && npm run build-prod` |
| **Start** | `npm start` |
| **Plan** | Individual ($19) |

**Now works**: Root `package.json` has "start": "cd backend && node server.js"

**Env Vars**:
```
PORT=10000
SUPABASE_URL=...
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
ADMIN_EMAIL=...
```

Deploy → single service, full-stack live!
