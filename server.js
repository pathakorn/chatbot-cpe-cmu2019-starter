const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()
const Client = require('@line/bot-sdk').Client;

const config = {
  channelAccessToken: 'Ble4Bf4FTLIRylkDuIshdZFwQS1NYWNDKAMcfsw5JGJEBz/G2wfEqTXAjHP+cCpNH43fWN19kkttf9e+bkUE9TYO64DgTvh8naj2OUPPggAUE4UFz2jy97aOQtlCc/Ofsy38MKYcud17JLII3pg2xAdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'd1d9418c653bae8527451751e2e6f8b5'
}

const client = new Client(config)

app.get('/', function (req, res) {
    res.send('Hello World!!')
    
})

app.post('/webhook', middleware(config), (req, res) => {
const event = req.body.events[0];
  if (event.type === 'message') {
    const message = event.message;
    console.log(message);

//     client.replyMessage(event.replyToken, {
//       // type: 'text',
//       // text: message.text
//       "type": "sticker",
//   "packageId": "1",
//   "stickerId": message.stickerId
//     })
   
//   }
//   res.send("test")

// })

client.replyMessage(event.replyToken, 
  {
    "type": "template",
    "altText": "This is a buttons template",
    "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://www.google.co.th/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiCp7TqyJzgAhXJRo8KHezQAiQQjRx6BAgBEAU&url=https%3A%2F%2Fdevelopers.google.com%2F%3Fhl%3Dth&psig=AOvVaw0oK71fNrBTLbIh4ZPjPoxU&ust=1549180393144902",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#CCCCFF",
        "title": "Pathakorn Rukchua",
        "text": "Please select",
        "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": "http://google.com/"
        },
        "actions": [
            {
              "type": "postback",
              "label": "Buy",
              "data": "action=buy&itemid=123"
            },
            {
              "type": "message",
              "label": "Add to cart",
              "text": "no no no"
            },
            {
              "type": "uri",
              "label": "View detail",
              "uri": "http://google.com"
            }
        ]
    }
  })
}
res.send("test")
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})