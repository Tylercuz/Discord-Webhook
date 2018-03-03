const Discord = require('discord.js');
const hook = new Discord.WebhookClient('webhook id', 'webhook token');

hook.send('@here');

var embed = new Discord.RichEmbed()
    .setTitle('Test')
    .setDescription('This is a test of a embed using a WebHook.')
    .setColor(`#00ff6e`)
    .addField(`Test`, 'Test')
    .addField(`Test`, 'Test')
    .addField(`Test`, 'Test')
    .setFooter(`Webhook`)
    .setTimestamp(new Date());
    hook.send(embed)