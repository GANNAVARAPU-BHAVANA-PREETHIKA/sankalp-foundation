require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'dist')));

// API routes
const PORT = process.env.PORT || 5000;

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

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get("/api/", async (req, res) => {
  try {
    const { data, error } = await supabase.from('donations').select('count').single();
    res.json({ 
      status: 'OK', 
      db: 'Connected', 
      tableCount: data ? data.count : 0
    });
  } catch (err) {
    res.json({ status: 'DB Error', error: err.message });
  }
});

app.post("/api/donate", async (req, res) => {
  // [existing donate logic from backend/server.js - copied exactly]
  console.log("DONATION:", req.body);

  try {
    const {
      name, email, phone, city, amount,
      wants80g, pan, address, pin, state
    } = req.body;

    const { data: insertData, error: insertError } = await supabase.from('donations').insert({
      name, email, phone, city, amount: Number(amount),
      wants80g: wants80g === 'true' || wants80g === true || wants80g === 'on',
      pan, address, pin, state
    }).select();
    console.log('INSERT:', insertData, insertError);

    // Admin email...
    const adminDate = new Date().toLocaleDateString('en-IN');
    const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; } /* simplified */</style>
</head>
<body>
  <h1>New Donation ₹${amount}</h1>
  <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Phone: ${phone}</p>
</body>
</html>`;
    await transporter.sendMail({
      from: `"Sankalp" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Donation ₹${amount}`,
      html: adminHtml
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

