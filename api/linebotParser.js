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
        type: "template",
        altText: `你的位置在${table}桌`,
        template: {
          type: "buttons",
          text: `你的位置在${table}桌`,
          actions: [
            {
              type: "uri",
              label: "查看座位圖",
              uri: `line://app/1653391636-27P4EW3W?table=${table}`
            }
          ]
        },
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
