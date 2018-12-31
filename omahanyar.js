const Discord = require('discord.js');
const client = new Discord.Client();
//Awokwokwokwokwok
console.log("BOT Omah Anyar Bekerja!")

client.on("message", message => {
if(message.author.bot) return;

if(message.content === "ping") {
message.channel.send('Pong!');
}
});
client.login('NTI5MTEwNzY1MjQ5MjMyOTE3.Dwsnjw.6snhyWVYchLNi7yy1QZS8UQ9qpA');
