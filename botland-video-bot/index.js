var fs = require('fs');
var botland = require('botland-sdk');
var Citizen = botland.Citizen;
var OutgoingMessage = botland.OutgoingMessage;

var bot = new Citizen('<BOTLAND-CITIZEN-ID>', '<BOTLAND-USER-TOKEN>');
bot.start();

bot.on('error', (err) => {
  console.log(err.message);
})

var content = JSON.parse(fs.readFileSync('content.json', 'utf8'));
var carousel = content.videos.map(video => {
  Object.assign(video, {allowfullscreen: video.size === 'full' ? 'allowfullscreen' : ''});
  var encoded = new Buffer(JSON.stringify(video)).toString('base64');
  return {
    'title': video.cardTitle,
    'image_url': 'https://i.ytimg.com/vi/' + video.vid + '/sddefault.jpg',
    'subtitle': video.cardSubtitle,
    'buttons':[
      {
        'type': 'web_url',
        'url': 'https://<HASH_NGORK>.ngrok.io/yt?v=' + encoded,
        'title': video.cardButton,
        'webview_height_ratio': video.size,
        'messenger_extensions': true
      },
      {
        'type':'element_share'
      }
    ]
  };
});

bot.on('message', (incoming) => {
  console.log('incoming: %j', incoming);
  bot.send(fbReplyRaw(incoming))
    .catch(e => console.log('error sending: ' + e));
});

function fbReplyRaw(message) {
  return OutgoingMessage.raw(message.conversationId, {
      'message': {
        'attachment': {
          'type': 'template',
          'payload': {
            'template_type': 'generic',
            'elements': carousel
          }
        }
      }
    });
}

console.log('bot started');