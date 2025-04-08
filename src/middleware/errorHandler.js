const errorHandler = (err, req, res, next) => {
    console.error(err.stack)
  
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
      message: err.message || "Une erreur est survenue sur le serveur",
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    })
  }
  
  module.exports = errorHandler
  
  