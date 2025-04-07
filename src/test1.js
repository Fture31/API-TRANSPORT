const bcrypt = require('bcryptjs');

// Fonction de test pour vérifier un mot de passe
const testPassword = async (plainPassword, hashedPassword) => {
  try {
    // Comparer le mot de passe en clair avec le mot de passe haché
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    
    // Afficher le résultat de la comparaison
    if (isMatch) {
      console.log('Le mot de passe correspond !');
    } else {
      console.log('Le mot de passe ne correspond pas.');
    }
  } catch (error) {
    console.error('Erreur dans la comparaison du mot de passe :', error);
  }
};

// Exemple d'utilisation
const hashedPassword = '$2b$10$8THvfG2T1zohKw7LdhTRxO14OhQPDhCBOi.mFBMo/9J4vpaqC3Izu'; // Mot de passe haché à tester
const plainPassword = 'password123'; // Mot de passe en clair à comparer

// Teste si le mot de passe en clair correspond au mot de passe haché
testPassword(plainPassword, hashedPassword);
