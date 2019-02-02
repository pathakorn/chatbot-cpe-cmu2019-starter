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

// client.replyMessage(event.replyToken, 
//   {
//     "type": "template",
//     "altText": "This is a buttons template",
//     "template": {
//         "type": "buttons",
//         "thumbnailImageUrl": "https://lh3.googleusercontent.com/FyZA5SbKPJA7Y3XCeb9-uGwow8pugxj77Z1xvs8vFS6EI3FABZDCDtA9ScqzHKjhU8av_Ck95ET-P_rPJCbC2v_OswCN8A=s688",
//         "imageAspectRatio": "rectangle",
//         "imageSize": "cover",
//         "imageBackgroundColor": "#FFFFFF",
//         "title": "Pathakorn Rukchua",
//         "text": "Please select",
//         "defaultAction": {
//             "type": "uri",
//             "label": "View detail",
//             "uri": "http://google.com/"
//         },
//         "actions": [
//             {
//               "type": "uri",
//               "label": "Facebook",
//               "uri": "https://www.facebook.com/pathakorn.rukchua?ref=bookmarks"
//             },
//             {
//               "type": "uri",
//               "label": "CPE Website",
//               "uri": "http://cpe.eng.cmu.ac.th/2013/"
//             },
//             // {
//             //   "type": "uri",
//             //   "label": "View detail",
//             //   "uri": "http://google.com"
//             // }
//         ]
//     }
//   })
// }
// res.send("test")
// })

client.replyMessage(event.replyToken, {
  "type": "template",
  "altText": "this is a carousel template",
  "template": {
      "type": "carousel",
      "columns": [
          {
            "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
            "imageBackgroundColor": "#FFFFFF",
            "title": "this is menu",
            "text": "description",
            "actions": [
                {  
                    "type":"cameraRoll",
                    "label":"Camera roll"
                },
                {  
                  "type":"location",
                  "label":"Location"
               }
            ]
          },
          {
            "thumbnailImageUrl": "https://c.76.my/Malaysia/line-brown-bear-cute-pencil-case-ubiyo-1802-02-Ubiyo@6.jpg",
            "imageBackgroundColor": "#000000",
            "title": "this is menu",
            "text": "description",
            "actions": [
              {
                "type":"datetimepicker",
                "label":"Select date",
                "data":"storeId=12345",
                "mode":"datetime",
                "initial":"2017-12-25t00:00",
                "max":"2018-01-24t23:59",
                "min":"2017-12-25t00:00"
              },
              {  
                "type":"camera",
                "label":"Camera"
             }
          ]
          }
      ],
      "imageAspectRatio": "rectangle",
      "imageSize": "cover"
  }
})
}
res.send("test")
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})