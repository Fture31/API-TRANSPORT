const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../model/UserModel");

const generateToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("La clé secrète JWT n'est pas définie dans les variables d'environnement");
  }
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
};


// Inscription d'un utilisateur
const signUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Vérifiez si l'utilisateur existe déjà dans la base de données
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "L'utilisateur existe déjà." });
    }

    // Hashage du mot de passe avant de l'enregistrer
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Mot de passe haché : ", hashedPassword);

    // Créez un nouvel utilisateur avec le mot de passe hashé
    const newUser = await User.create({ email, password: hashedPassword });

    // Générez un token pour l'utilisateur
    const token = generateToken(newUser.id);

    // Répondez avec le token et les informations de l'utilisateur
    return res.status(201).json({
      token,
      user: { id: newUser.id, email: newUser.email },
    });
  } catch (error) {
    console.error("Erreur dans signUp :", error);
    return res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
};



// Connexion d'un utilisateur
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Recherche de l'utilisateur par email
    const user = await User.findByEmail(email);
    console.log("Utilisateur trouvé :", user);
    if (!user) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Vérification du mot de passe
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Mot de passe correspond-il ? :", isMatch);  // Cela doit afficher 'true' si les mots de passe correspondent.

    if (!isMatch) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    // Génération du token JWT
    const token = generateToken(user.id);

    return res.status(200).json({
      message: "Connexion réussie",
      token,
    });
  } catch (error) {
    console.error("Erreur dans login :", error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};


module.exports = { signUp, login };
