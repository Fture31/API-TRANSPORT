// Middleware pour gérer les erreurs
const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
  
    // Déterminer le code d'état HTTP
    const statusCode = err.statusCode || 500
  
    // Répondre avec un message d'erreur
    res.status(statusCode).json({
      message: err.message || "Une erreur est survenue sur le serveur",
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    })
  }
  
  module.exports = errorHandler
  
  