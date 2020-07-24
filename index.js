const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

const configPath = 'config.json';
let rawdata = fs.readFileSync(configPath);
let config = JSON.parse(rawdata);


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  let parts = msg.content.split(' ');
  if (parts.length === 0) return;

  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else if (parts[0] === '!rand') {
    if (typeof config.random === 'undefined') config.random = {};

    if ( parts.length >= 2) {
      if (parts[1] === 'add') {
        let key = parts[2];
        let values = parts.slice(3);
        if (typeof key === 'undefined' || values.length === 0) {
          msg.reply('Command Syntax ```!rand add <group> <value>```');
        }
        else {
          let value = values.join(' ');
          if ( typeof config.random[key] === 'undefined') config.random[key] = [];

          config.random[key].push(value);
          writeConfig();
          msg.reply(`I have added '${value}' to randomizer named '${key}'.`);
        }
      }
      else if (parts[1] === 'remove') {
        let key = parts[2];
        let values = parts.slice(3);
        if (typeof key === 'undefined' || values.length === 0) {
          msg.reply('Command Syntax ```!rand remove <group> <value>```');
        }
        else {
          let value = values.join(' ');

          if ( typeof config.random[key] === 'undefined') {
            msg.reply(`Randomizer named '${key}' does not exist. \`\`\`!rand remove <group> <value>\`\`\``);
            return;
          }
          let index = config.random[key].findIndex(x => x === value);
          if (index >= 0) {
            config.random[key].slice(index, ++index);
            writeConfig();
            msg.reply(`I have removed '${value}' from randomizer named '${key}'.`);
          }
          else {
            msg.reply(`Value '${value}' does not exist in randomizer named '${key}'.`);
          }
        }
        
      }
      else {
        let key = parts[1];

        if ( typeof config.random[key] === 'undefined') {
          msg.reply(`Randomizer named '${key}' does not exist. \`\`\`!rand <group>\`\`\``);
          return;
        }

        let array = config.random[key];
        msg.reply(`I have selected a random ${key} \`\`\`${array[Math.floor(Math.random() * array.length)]}\`\`\``);
      }
    }
  }
  if (msg.content.indexOf('ayy') >= 0 || msg.content.indexOf('Ayy') >= 0) {
    var lmaos = ['ayy lmao! :alien:', 'remember the ayylmao! :alien: :face_with_cowboy_hat:', ('Your new name is ' + msg.author + 'ayy Lmao! :alien:'), "https://goo.gl/WRuXn3"];
    var lmao = lmaos[Math.floor(Math.random()*lmaos.length)];
    msg.reply(lmao);
  }
});


async function writeConfig() {
  fs.writeFile(configPath, JSON.stringify(config));
}
client.login(config.discordToken);