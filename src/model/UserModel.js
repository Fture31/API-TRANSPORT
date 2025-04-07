const bcrypt = require("bcryptjs");
const db = require("../config/db"); // Connexion à la base de données

class UserModel {
  // Méthode pour créer un utilisateur dans la base de données
  static async create({ email, password }) {
    try {
      
      
      const [result] = await db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password]
      );
      return { id: result.insertId, email, password };
    } catch (error) {
      console.error("❌ Erreur lors de la création :", error);
      throw error;
    }
  }

  // Méthode pour trouver un utilisateur par email
  static async findByEmail(email) {
    try {
      console.log("🔎 Requête SQL envoyée : SELECT * FROM users WHERE email = ?", email);
      const [rows] = await db.query(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );
      console.log("📦 Résultats trouvés :", rows);
      return rows[0] || null;
    } catch (error) {
      console.error("❌ Erreur SQL :", error);
      throw error;
    }
  }
}

module.exports = UserModel;
