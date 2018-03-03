# Discord-Webhook
Before you start you will need node ( https://nodejs.org/en/ ), some knowledge of javascript and a code editor (Atom, Vscode)
You will also need a webhook in your server setup


Create a Discord WebHook on windows

1) Make a folder where desired, call it whatever you want.
2) Open the folder, hold shift and right click. (Make sure your mouse is hovering over the folder)
3) Once a menu has come up click open cmd or powershell.
4) Once one of them is open type npm init and press enter.
5) After that is done it will go through a few steps. (name, version, description etc.)
6) Once you have done that type npm i discord.js (this is the node module you will need.)
7) Then you can close the window and open the folder in a editor of choice. (The one I reccomend is atom or vs code.)

                                     Now you have got the main part over.

1) Make a new file and call it hook or index .js.
2) Then open it and put the code in bellow.

      // Import the discord.js module
    const Discord = require('discord.js');

      // This defines your id and token.
    const hook = new Discord.WebhookClient('webhook id', 'webhook token');

     // This is a test message.
    hook.send('I am now alive!');


3) To get your id and token there should be a link on the webhook.  
4) Once that it is done make a file called run.bat. (This will run the webhook)
5) In the run.bat copy the code in down bellow.

     node hook.js (or index.js).

6) Save all the files and click on the run.bat and look in the channel you set up the webhook to send the message.
7) This should of ssent the message `I am alive!`.

                               Now getting into embeds.

1) Copy the code bellow and change it to your liking.

 
        var Embed = new Discord.RichEmbed()
        .setTitle('Title')
        .setColor('Put a hex color code here')
        .setDescription('Description')
        .addField('Title of the field', 'text of the field')
        .addField('Title of the field', 'text of the field')
        .addField('Title of the field', 'text of the field')
        .setTimestamp(new Date()); // This puts the date and time.
        hook.send(Embed)



Copyright of Tylercuz Games.
