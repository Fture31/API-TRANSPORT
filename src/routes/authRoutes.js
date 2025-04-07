const express = require("express");
const { signUp, login } = require("../Controller/authController");

const router = express.Router();

// Route d'inscription
router.post("/signup", signUp);

// Route de connexion
router.post("/login", async (req, res) => {
    console.log("Requête reçue sur /login");
    return login(req, res);  // Assurez-vous que la fonction est bien appelée ici
});


module.exports = router;
