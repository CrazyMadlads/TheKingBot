const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

let rawdata = fs.readFileSync('config.json');
let config = JSON.parse(rawdata);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(config.discordToken);