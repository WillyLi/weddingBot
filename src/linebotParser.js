const linebot = require('linebot');

const bot = linebot({
  channelId: '1653391636',
  channelSecret: 'fd6a966153b3f98c038bbbf77c3d2ff2',
  channelAccessToken: 'xAIVDGCfX3CLuk3wJRrC1ilwg3NEJvWH803i+kv+jf2+ZQPB3kWaE9ekpXc3C3VPeYlOr/0DgJDD8mfaNjEEwJ61d0K07qru3iWQgG4kPDPVA9+OBv+lQN+G1vTyEYc4I49nuETEjUEJb+RqvLOmVgdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function (event) {
  console.log(event.message.type);
  if (event.message.type == 'text') {
    let msg = event.message.text;
    event.reply(msg).then(function (data) {
      // success 
      console.log(msg);
    }).catch(function (error) {
      // error 
      console.log('error');
    });
  } else if (event.message.type == 'location') {
    let location = event.message.latitude + ',' + event.message.longitude;
    event.reply({
      type: "template",
      altText: "立刻探索周邊",
      template: {
        type: "buttons",
        text: "立刻探索周邊",
        imageAspectRatio: "rectangle",
        imageSize: "contain",
        thumbnailImageUrl: "https://img.appledaily.com.tw/images/ReNews/20160311/640_0bdb7a5f591c3ebc9fe498d458fe7d0b.jpg",
        imageBackgroundColor: "#00cd02",
        actions: [{
            type: "uri",
            label: "餐廳",
            uri: "line://app/1610106375-95yDl55L?types=restaurant&location=" + location,
          },
          {
            type: "uri",
            label: "藥局",
            uri: "line://app/1610106375-95yDl55L?types=pharmacy&location=" + location,
          },
          {
            type: "uri",
            label: "加油站",
            uri: "line://app/1610106375-95yDl55L?types=gas_station&location=" + location,
          },
          {
            type: "uri",
            label: "便利商店",
            uri: "line://app/1610106375-95yDl55L?types=convenience_store&location=" + location,
          }
        ]
      },
    }).then(function (data) {
      // success 
      console.log(data);
    }).catch(function (error) {
      // error 
      console.log(error);
    });
  }
});

module.exports = bot.parser();
