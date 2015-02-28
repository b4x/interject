/*
###########################
## required dependencies ##
###########################
install each one with 'npm install [dependency]'
for example 'npm install irc'
*/

#var irc = require('irc');
#var _ = require('underscore');

/*
#########################
## connection settings ##
#########################
change these to suit your needs
*/

var bot_nick = 'Richard_Stallman';
var bot_user = 'rms';
var bot_name = 'Richard M Stallman';
var this_channel = '#channel';
var this_server = 'irc.server.domain';
var server_port = '6667';

var bot = new irc.Client(this_server, bot_nick, {
  userName: bot_user,
  realName: bot_name,
  channels: [this_channel],
  port: server_port,
  debug: true
  });

/*
bot.addListener('pm', function (from, message) {
  //console.log(from + ' => ME: ' + message);
  process_message(from, message);
});
*/

bot.addListener('message', function(from, to, message) {
  if 
(/(g|G)(n|N)(u|U)((\s*|)((\/)|((p|P)(l|L)(u|U)(s|S))|(\+)|((s|S)(l|L)(a|A)(s|S)(h|H)))(\s*|))\(l|L)(i|I)(n|N)(u|U)(x|X)\??/i.test(message)){
}
  else if (/(l|L)(i|I)(n|N)(u|U)(x|X)\??/i.test(message)){
  bot.say(to, 'I\'d just like to interject for a moment. What you\’re referring to as Linux,\
 is in fact, GNU/Linux, or as I\’ve recently taken to calling it, GNU plus Linux.');
}});

bot.addListener('error', function(message) {
  console.log('error: ', message);
});
