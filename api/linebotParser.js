const linebot = require('linebot')
const getTable = require('./getTable')
const { channelId, channelSecret, channelAccessToken } = process.env
const bot = linebot({
  channelId,
  channelSecret,
  channelAccessToken
})
bot.on('message', function(event) {
  // const userId = event.userId
  console.log(event.message.type)
  if (event.message.type == 'text') {
    if(event.message.text == '[Menu]') {
      event
      .reply([
        msg,
        {
          type: 'image',
          originalContentUrl: `https://wedding-line-bot.herokuapp.com/menu.jpg`,
          previewImageUrl: `https://wedding-line-bot.herokuapp.com/menu.jpg`
        }
      ])
      .then(function(data) {
        // success
        console.log('success', data)
      })
      .catch(function(error) {
        // error
        console.log('error', error)
      })
      return
    }
    const table = getTable(event.message.text)
    if (!table) {
      event
        .reply(
          `對不起，找不到您的名字，請輸入全名(EX:王小明)，或由招待人員為您服務。`
        )
        .then(function(data) {
          // success
          console.log(msg)
        })
        .catch(function(error) {
          // error
          console.log('error')
        })
      return
    }
    const msg = `您的座位在${table}桌`
    event
      .reply([
        msg,
        {
          type: 'image',
          originalContentUrl: `https://wedding-line-bot.herokuapp.com/${table}.jpg`,
          previewImageUrl: `https://wedding-line-bot.herokuapp.com/${table}.jpg`
        }
      ])
      .then(function(data) {
        // success
        console.log('success', data)
      })
      .catch(function(error) {
        // error
        console.log('error', error)
      })
  }
})

module.exports = bot.parser()
