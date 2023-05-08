const Discord = require('discord.js')

const TOKEN = "OTY5MTM3NTY3NDIzNDMwNjk2.YmpBsQ.53xFe2hUqmrVZA_T3ePQ5DXW4IM"

const prefix = '-morph '

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log("Morp my friend is Activated !");
})

client.on("messageCreate", (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if (command === 'boom') {
        message.channel.send('morph to boom.')
    }

    if (command === 'hi') {
        message.reply("hello worldl!");
    }

    if (command === 'test992212') {
        client.user.setUsername("test")
    }


    // if (message.content === 'ping') {
    //     message.channel.send("pong");
    // }


})

client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.content === '-morph help') {
        message.reply("Instructor .")
    }
})

client.login(TOKEN);