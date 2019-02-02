const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()
const Client = require('@line/bot-sdk').Client;

const config = {
  channelAccessToken: 'YRgNbv8k7kquXvVV60evJRB9k40MawBaQCEs+e9+G0em0iVP/tc76Uhl8orWRoLlgH43fWN19kkttf9e+bkUE9TYO64DgTvh8naj2OUPPggB/Lbf0TSmwEyUfMUNvAjjxaKOcA/9DsTKSlf0cyEjWewdB04t89/1O/w1cDnyilFU=',
  channelSecret: 'd1d9418c653bae8527451751e2e6f8b5'
}

const client = new Client(config)

app.get('/', function (req, res) {
    res.send('Hello World!!')
    
})

app.post('/webhook', middleware(config), (req, res) => {
  res.send('webhook success')

  const event = req.body.events[0];

if (event.type === 'message') {
  const message = event.message;
  client.replyMessage(event.replyToken, {
    type: 'text',
    text: message
  })
}
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})