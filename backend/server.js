const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const DIST_DIR = path.resolve(__dirname, "../dist");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


app.get("/api/health", async (req, res) => {
  try {
    const { data, error } = await supabase.from('donations').select('count').single();
    res.json({ 
      status: 'OK', 
      db: 'Connected', 
      tableCount: data ? data.count : 0,
      error: error?.message || null 
    });
  } catch (err) {
    res.json({ status: 'DB Error', error: err.message });
  }
});


app.post("/api/donate", async (req, res) => {
  console.log("DONATION:", req.body);

  try {


    const {
      name, email, phone, city, amount,
      wants80g, pan, address, pin, state
    } = req.body;


    // Insert to DB
    const { data: insertData, error: insertError } = await supabase.from('donations').insert({
      name, email, phone, city, amount: Number(amount),

      wants80g: wants80g === 'true' || wants80g === true || wants80g === 'on',

      pan, address, pin, state
    }).select();
    console.log('INSERT:', insertData, insertError);




    // Admin/Receiver email - Beautiful HTML template
    const adminDate = new Date().toLocaleDateString('en-IN');
    const adminHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { color: #2563eb; }
    .section { margin: 30px 0; padding: 20px; background: #f8fafc; border-radius: 12px; border-left: 4px solid #3b82f6; }
    .highlight { background: #dbeafe; padding: 12px; border-radius: 8px; font-weight: 600; }
    .emoji { font-size: 1.5em; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background: #f1f5f9; font-weight: 600; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9em; color: #64748b; }
  </style>
</head>
<body>
  <div style="text-align: center; margin-bottom: 30px;">
    <h1><span class="emoji">🎉</span> New Donation Received</h1>
    <p>A donation has been submitted through Sankalp platform.</p>
  </div>

  <div class="section">
    <h2>Donor Information</h2>
    <table>
      <tr><th>Name</th><td>${name}</td></tr>
      <tr><th>Email</th><td>${email}</td></tr>
      <tr><th>Phone</th><td>${phone}</td></tr>
      <tr><th>City</th><td>${city}</td></tr>
    </table>
  </div>

  <div class="section highlight">
    <h2>Donation Details</h2>
    <table>
      <tr><th>Amount</th><td>₹${amount}</td></tr>
      <tr><th>Date</th><td>${adminDate}</td></tr>
    </table>
  </div>

${wants80g === 'true' ? `
  <div class="section">
    <h2>80G Tax Details</h2>
    <table>
      <tr><th>PAN</th><td>${pan}</td></tr>
      <tr><th>Address</th><td>${address}</td></tr>
      <tr><th>Pincode</th><td>${pin}</td></tr>
      <tr><th>State</th><td>${state}</td></tr>
    </table>
  </div>` : ''}

  <div class="footer">
    <p>Automated notification from Sankalp donation system</p>
  </div>
</body>
</html>
    `;
    await transporter.sendMail({
      from: `"Sankalp Foundation" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `🔔 New Donation - ₹${amount}`,
      html: adminHtml
    });

    // Donor email - Beautiful HTML template
    const donorDate = new Date().toLocaleDateString('en-IN');
    const donorHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background: #f8fafc; }
    .header { background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 12px 12px 0 0; }
    .content { background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
    .highlight { background: #dbeafe; padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center; }
    .emoji { font-size: 3em; display: block; margin-bottom: 10px; }
    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    th, td { padding: 15px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background: #f8fafc; font-weight: 600; color: #1e40af; }
    .button { background: #3b82f6; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block; margin: 20px 0; }
    .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 0.9em; color: #64748b; }
  </style>
</head>
<body>
  <div class="header">
    <span class="emoji">🎉</span>
    <h1>Donation Successful!</h1>
    <p>Thank you for supporting Sankalp Foundation</p>
  </div>

  <div class="content">
    <div class="highlight">
      <h2>Receipt #${Math.floor(Math.random()*10000)}</h2>
      <h1>₹${amount}</h1>
      <p>Date: ${donorDate}</p>
    </div>

    <h3>Donor Information</h3>
    <table>
      <tr><th>Name</th><td>${name}</td></tr>
      <tr><th>Email</th><td>${email}</td></tr>
      <tr><th>Phone</th><td>${phone}</td></tr>
      <tr><th>City</th><td>${city}</td></tr>
    </table>

    ${wants80g === 'true' ? `
    <div style="background: #ecfdf5; padding: 20px; border-radius: 12px; margin: 20px 0;">
      <h3>✅ 80G Certificate Eligible</h3>
      <table>
        <tr><th>PAN</th><td>${pan}</td></tr>
        <tr><th>Address</th><td>${address}</td></tr>
      </table>
    </div>` : ''}

    <p style="margin: 30px 0; padding: 20px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
      <strong>Next Steps:</strong><br>
      Our team will verify your payment and issue receipt/certificate within 7 days.
    </p>

    <p><a href="https://sankalp-foundation.vercel.app" className="button" style="background: #3b82f6; color: white; padding: 12px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; display: inline-block;">Visit Sankalp</a></p>

    <div className="footer">
      <p>Thank you for your generosity! 🌟</p>
      <p>Sankalp Foundation | support@sankalp.org</p>
    </div>
  </div>
</body>
</html>
    `;
    await transporter.sendMail({
      from: `"Sankalp Foundation" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Receipt #${Math.floor(Math.random()*10000)} - ₹${amount} Donation`,
      html: donorHtml
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.use(express.static(DIST_DIR));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

