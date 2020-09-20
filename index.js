// Imports
const Discord = require('discord.js');
const conf = require('./config.js');
const bot = new Discord.Client();

// Vars
const token = conf.discordAPI;
var prefix = conf.prefix;

// Main
bot.on('message', message => {
  if (message.author.bot) return;
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  let 
  
  // Porn
  if (cmd === `${prefix}porn`) {
      message.channel.send({files: ["gifs/1.gif"]})
  }

});
bot.login(token);