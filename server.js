require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

app.get("/api/", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("donations")
      .select("count", { count: "exact", head: true });

    res.json({
      status: "OK",
      db: "Connected",
      tableCount: data?.count || 0,
      error: error?.message || null,
    });
  } catch (err) {
    res.status(500).json({ status: "DB Error", error: err.message });
  }
});

app.post("/api/donate", async (req, res) => {
  try {
    const { name, email, phone, city, amount, wants80g, pan, address, pin, state } = req.body;

    const { data, error } = await supabase
      .from("donations")
      .insert({
        name,
        email,
        phone,
        city,
        amount: Number(amount),
        wants80g: wants80g === true || wants80g === "true" || wants80g === "on",
        pan,
        address,
        pin,
        state,
      })
      .select();

    if (error) {
      return res.status(500).json({ error: error.message || "Failed to save donation" });
    }

    res.json({
      success: true,
      message: "Donation details saved successfully.",
      donation: data?.[0] || null,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.use(express.static(path.join(__dirname, "../dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server + Frontend on http://localhost:${PORT}`);
  console.log(`API: http://localhost:${PORT}/api/`);
});
