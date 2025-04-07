const bcrypt = require('bcryptjs');

(async () => {
  const password = 'manassebegade@gmail.com';
  const hashed = await bcrypt.hash(password, 10);
  console.log('Hashé :', hashed);

  const isMatch = await bcrypt.compare(password, hashed);
  console.log('Correspondance ?', isMatch); // Doit afficher true
})();
