const { Router } = require('express')
const linebotParser = require('./linebotParser')

const router = Router()

router.post('/chatbot', linebotParser);

module.exports = router
