const express = require("express");
const bodyParser = require("body-parser");
const { execFile } = require("child_process");
const path = require("path");
require("dotenv").config();
const db = require("./db");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).send("Missing fields");

  try {
    await db.query("INSERT INTO users (name, email) VALUES ($1, $2)", [name, email]);

    execFile(path.join(__dirname, "send_email.sh"), [name, email], (err, stdout, stderr) => {
      if (err) return res.status(500).send("Email failed");
      res.send("Signup complete. Email sent.");
    });
  } catch (e) {
    res.status(500).send("DB Error");
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
