import express from "express";
import fs from "fs";

const app = express();
const startedAt = Date.now();

app.get("/health", (req, res) => {
  const uptime = Math.floor((Date.now() - startedAt) / 1000);
  res.status(200).json({ status: "ok", uptime });
});

app.get("/version", (_req, res) => {
  try {
    const pkg = JSON.parse(fs.readFileSync(new URL("./package.json", import.meta.url)));
    res.json({ version: pkg.version || "0.0.0" });
  } catch {
    res.json({ version: "unknown" });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[backend] listening on http://localhost:${port}`);
});


