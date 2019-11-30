const Discord = require("discord.js");
const Self = new Discord.Client();
const config = require("./config.json");
var activity =  "planting trees!"

client.on("ready", () => {
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 

    client.user.setActivity(`${activity}`);
    client.on("guildCreate", guild => {
        console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
        client.user.setActivity(`${activity}`);
    });



    client.on("message", async message => {
        if(message.author.bot) return;
        if(message.content.indexOf(config.prefix) !== 0) return;{
            const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();

            if(command === "ping") {
                const m = await message.channel.send("Ping?");
                m.edit(`🏓Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
            }

        }
    }
});