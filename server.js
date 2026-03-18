require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Supabase & Email
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// API ROUTES FIRST (before static)
app.get('/api/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('donations')
      .select('count', { count: 'exact', head: true });
    res.json({ 
      status: 'OK', 
      db: 'Connected', 
      tableCount: data?.count || 0,
      error: error?.message || null 
    });
  } catch (err) {
    res.status(500).json({ status: 'DB Error', error: err.message });
  }
});

app.post('/api/donate', async (req, res) => {
  try {
    const { name, email, phone, city, amount, wants80g, pan, address, pin, state } = req.body;
    
    // Insert donation
    const { data, error } = await supabase.from('donations').insert({
      name, email, phone, city, amount: Number(amount),
      wants80g: wants80g === true || wants80g === 'true' || wants80g === 'on',
      pan, address, pin, state
    }).select();

    // Admin email (simplified)
    await transporter.sendMail({
      from: `"Sankalp" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Donation ₹${amount}`,
      text: `New donation: ${name} (${email}) - ₹${amount}`
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// SERVE FRONTEND - AFTER API ROUTES
app.use(express.static(path.join(__dirname, '../dist')));

// SPA catch-all
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server + Frontend on http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api/`);
});

