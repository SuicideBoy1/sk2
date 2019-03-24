const Discord = require('discord.js');
const fs = require("fs");
const forEachTimeout = require('foreach-timeout');
const bot = new Discord.Client();
const colors = ["FF0D00","FF2800","FF3D00","FF4F00","FF5F00","FF6C00","FF7800","FF8300","FF8C00","FF9500","FF9E00","FFA500","FFAD00","FFB400","FFBB00","FFC200","FFC900","FFCF00","FFD600","FFDD00","FFE400","FFEB00","FFF200","FFFA00","F7FE00","E5FB00","D5F800","C6F500","B7F200","A8F000","98ED00","87EA00","74E600","5DE100","41DB00","1DD300","00C618","00BB3F","00B358","00AC6B","00A67C","009E8E","028E9B","06799F","0969A2","0C5DA5","0E51A7","1047A9","133CAC","1531AE","1924B1","1F1AB2","2A17B1","3415B0","3C13AF","4512AE","4E10AE","560EAD","600CAC","6A0AAB","7608AA","8506A9","9702A7","AD009F","BC008D","C7007D","D0006E","D8005F","DF004F","E7003E","EF002A","F80012"];
const stop = []
const emoji = {
'RocketLeague': '503584722228871169',
'TabletopSimulator': '544117221711151107',
'CSGO': '503582039409426442',
'Minecraft': '503582018391506954',
'Osu': '503586881083146260',
'Dota2': '503582030966292520',
'GarrysMod': '503582137811730463',
'DuckGame': '503582123664605195',
'Overwatch': '503584922028474378',
'PUBG': '503582093532725270',
'Fortnite': '503582211472228352',
'GrandTheftAutoV': '503585408307691521',
'Hearthstone': '503586686513577994',
'LeagueofLegends': '503582165574090762',
'RainbowSixSiege': '503582194971836434',
'Rust': '503582221689683988'
};


const prefix = "s!";
async function color () {
    forEachTimeout(colors, (color) => {
        bot.guilds.forEach((guild) => {
                if (!stop.includes(guild.id)) {
                let role = guild.roles.find('name', '✬》MVP《✬');
                if (role && role.editable) 
                    role.setColor(color);
            }  
        })
    }, 1500).then(color);
}
bot.on('ready', () => {
    color();

bot.on('messageReactionAdd', (reaction, user) => {
bot.emojis.get('503586881083146260');
bot.channels.get ('428471923970670592').fetchMessage ('428471923970670592-552233195014324261');
if (reaction.message.id !== '541216302640136202')
  return ;
  reaction.remove (user);
if (reaction.emoji.name === 'RocketLeague'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481013715304448').catch();
}
if (reaction.emoji.name === 'TabletopSimulator'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481130707156992').catch();
}

if (reaction.emoji.name === 'CSGO'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481199183364108').catch();
}

if (reaction.emoji.name === 'Minecraft'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481238018555906').catch();
}

if (reaction.emoji.name === 'Osu'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481261548601344').catch();
}

if (reaction.emoji.name === 'Dota2'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481283128295424').catch();
}

if (reaction.emoji.name === 'GarrysMod'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481309065609218').catch();
}

if (reaction.emoji.name === 'DuckGame'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481362165628928').catch();
}

if (reaction.emoji.name === 'Overwatch'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481406600085515').catch();
}

if (reaction.emoji.name === 'PUBG'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481459716620288').catch();
}

if (reaction.emoji.name === 'Fortnite'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481565702488075').catch();
}

if (reaction.emoji.name === 'GrandTheftAutoV'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481635021881344').catch();
}

if (reaction.emoji.name === 'Hearthstone'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481686268018697').catch();
}

if (reaction.emoji.name === 'LeagueofLegends'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481713157701633').catch();
}

if (reaction.emoji.name === 'RainbowSixSiege'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481785551126528').catch();
}

if (reaction.emoji.name === 'Rust'){
  const member = reaction.message.guild.members.get (user.id);
  member.addRole ('428481805792968715').catch();
}
  })

bot.on('message', (message) => {

if (command === 'eval' && message.author.id === `248521740945195008`) {
        message.delete();
        try {
                  let code = args.join(" ");
                  let evaled = eval(code);
      
                  if (typeof evaled !== "string")
                      evaled = util.inspect(evaled);
              } catch (err) {
              }
      }



    if (message.channel.type !== 'text') return;
    if (message.member.hasPermission('MANAGE_GUILD') || message.member.hasPermission('ADMINISTRATOR') || message.member.id === message.guild.owner.id) {
        if (message.content === 's!stop') {stop.push(message.guild.id); return message.channel.send('Готово');}
        if (message.content === 's!start') {stop.splice(stop.indexOf(message.guild.id),1); return message.channel.send('Готово');}
});

bot.login(process.env.BOT_TOKEN);
