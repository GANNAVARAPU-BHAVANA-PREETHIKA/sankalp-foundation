const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
const DIST_DIR = path.resolve(__dirname, "../dist");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.get("/api/debug/donations", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .limit(1);

    if (error) {
      return res.status(500).json({
        ok: false,
        supabaseUrl: process.env.SUPABASE_URL,
        table: "public.donations",
        error: error.message,
        hint: "Supabase connected, but the donations table may be missing from the schema cache or unavailable in this project.",
      });
    }

    res.json({
      ok: true,
      supabaseUrl: process.env.SUPABASE_URL,
      table: "public.donations",
      rowCount: Array.isArray(data) ? data.length : 0,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      supabaseUrl: process.env.SUPABASE_URL,
      table: "public.donations",
      error: err.message || "Debug check failed",
    });
  }
});

app.get("/api/health", async (req, res) => {
  try {
    const { data, error } = await supabase.from("donations").select("count").single();
    res.json({
      status: "OK",
      db: "Connected",
      tableCount: data ? data.count : 0,
      error: error?.message || null,
    });
  } catch (err) {
    res.json({ status: "DB Error", error: err.message });
  }
});

app.post("/api/donate", async (req, res) => {
  console.log("DONATION:", req.body);

  try {
    const { name, email, phone, city, amount, wants80g, pan, address, pin, state } = req.body;

    const { data: insertData, error: insertError } = await supabase
      .from("donations")
      .insert({
        name,
        email,
        phone,
        city,
        amount: Number(amount),
        wants80g: wants80g === "true" || wants80g === true || wants80g === "on",
        pan,
        address,
        pin,
        state,
      })
      .select();

    if (insertError) {
      console.error("SUPABASE INSERT ERROR:", insertError);
      return res.status(500).json({
        error: insertError.message || "Failed to save donation",
        hint:
          insertError.message?.includes("schema cache") || insertError.message?.includes("Could not find the table")
            ? "Supabase is connected, but public.donations is not available in the schema cache for the configured project."
            : undefined,
      });
    }

    console.log("INSERT:", insertData);
    res.json({
      success: true,
      message: "Donation details saved successfully.",
      donation: insertData?.[0] || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Request failed" });
  }
});

app.use(express.static(DIST_DIR));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
