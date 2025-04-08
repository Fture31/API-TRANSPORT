require("dotenv").config();

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'supersecretkey';
}

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const enginRoutes = require("./routes/enginRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
console.log("Routes chargées : /auth/login et /auth/signup");
app.use("/engins", enginRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
