const linebot = require('linebot')
const { channelId, channelSecret, channelAccessToken } = process.env
const bot = linebot({
  channelId,
  channelSecret,
  channelAccessToken
})
bot.on('message', function(event) {
  console.log(event.message.type)
  if (event.message.type == 'text') {
    let msg = 'test'
    event
      .reply(msg)
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
