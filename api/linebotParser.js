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
  const menu = ['#六品前付珍饈碟',
    '川味小黃瓜、柚香白玉菜、梅汁蜜番茄',
    '寧式烤麩集、紅袍脆腰果、糖醋上子排',
    '#紅袍烤鴨龍蝦盤',
    '#花開富貴慶團圓',
    '炸紫心、地瓜圓',
    '#御品干貝佛跳牆(位上)',
    '#金銀蒜蒸海大蝦',
    '#清蒸蔥油石班魚',
    '#醤爆婆參梅花带',
    '#荷香櫻蝦糯米糕',
    '#蟲花鮑參燉土難(全雞,大盅)',
    '#主廚精緻美雙點',
    '冰心綠豆糕、芝麻海鮮卷',
    '#寶島幸福鮮水果(三色)'
  ]
  if (event.message.type == 'text') {
    if(event.message.text == '今天吃什麼？') {
      event
      .reply('')
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
