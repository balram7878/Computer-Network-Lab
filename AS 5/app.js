import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use((req, res) => {
  try {
    const filePath = path.join(__dirname, "files", req.path);
    if (fs.existsSync(filePath)) return res.sendFile(filePath);
  } catch (err) {
    res.json({ message: err.message });
  }
});

const PORT = 5173;

app.listen(PORT, () => {
  console.log("Server listen at port: ", PORT);
});
