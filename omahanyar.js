const Discord = require('discord.js');
const fs = require('fs');
const prefix = '-'

const token = 'NTI5MTEwNzY1MjQ5MjMyOTE3.Dwsnjw.6snhyWVYchLNi7yy1QZS8UQ9qpA'

var bot = new Discord.Client ();

bot.on("ready", function() {
    console.log('Omah Lawas Bekerja!');
});

bot.on("message", async message => {

    if (message.author.equals(bot.user)) return;
    let sender = message.author;
    let args = message.content.slice(prefix.lenght).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    
   

    if (message.content == prefix + "test") {
        message.channel.sendMessage("saya aktif!");
    }
    
    if (message.content == "pagi") {
        message.channel.sendMessage("`Pagi juga` ");
    }
    if (message.content == "Hai") {
        message.channel.sendMessage("*Hai.... Halo... Hai...*");
    }
    
    if (message.author.equals(bot.user)) return;
    var dadu =["1&1", "1&2", "1&3", "1&4", "1&5", "1&6","2&1", "2&2", "2&3", "2&4", "2&5", "2&6","3&1", "3&2", "3&3", "3&4", "3&5", "3&6","4&1", "4&2", "4&3", "4&4", "4&5", "4&6", "5&1", "5&2", "5&3", "5&4", "5&5", "5&6","6&1", "6&2", "6&3", "6&4", "6&5", "6&6" ]
    var throwDadu = dadu[Math.floor(Math.random() *dadu.length)];
    
    if (message ===  prefix + 'r'){
        message.channel.send(`Anggka Dadu Anda \n${throwDadu}`);
    }
});

bot.login(token);
