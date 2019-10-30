const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const chatbot = require('./routes')

// Import API Routes
app.use(chatbot)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
