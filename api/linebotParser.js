const linebot = require('linebot')
const guestMap = require('./guestMap.json')
const { channelId, channelSecret, channelAccessToken } = process.env
const bot = linebot({
  channelId,
  channelSecret,
  channelAccessToken
})
bot.on('message', function(event) {
  console.log(event.message.type)
  if (event.message.type == 'text') {
    const table = guestMap[event.message.text.trim()]
    event
      .reply({
        type: 'image',
        originalContentUrl: 'https://wedding-line-bot.herokuapp.com/map.jpg',
        previewImageUrl: 'https://wedding-line-bot.herokuapp.com/map.jpg'
      })
      .then(function(data) {
        // success
        console.log(msg)
      })
      .catch(function(error) {
        // error
        console.log('error')
      })
  }
})

module.exports = bot.parser()
