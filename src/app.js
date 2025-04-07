// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");


// // const authRoutes = require("./routes/authRoutes");
// const enginRoutes = require("./routes/enginRoutes");
// const authRoutes = require("./routes/authRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/auth", authRoutes);
// app.use("/engins", enginRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
require("dotenv").config();

// Si la clé JWT n'est pas définie dans les variables d'environnement, la définir manuellement
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'supersecretkey'; // Définir la clé secrète manuellement si elle n'est pas définie
}

console.log('JWT_SECRET:', process.env.JWT_SECRET); // Affiche la clé secrète, soit depuis .env, soit manuellement

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const enginRoutes = require("./routes/enginRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Préfixe '/auth' pour les routes d'authentification
app.use("/auth", authRoutes);

console.log("Routes chargées : /auth/login et /auth/signup");

// Préfixe '/engins' pour les routes d'engins
app.use("/engins", enginRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
