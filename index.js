const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
require('discord-buttons')(client);
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

const express = require("express");
 const app = express();

 app.get("/", (req, res) => {
	 res.send("pinging");
	
 });

 app.listen(3000, () => {
	 console.log("server started");
 });

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(client, message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

/**
 * if(button.id == 'AddRole') {
    const role = button.guild.roles.cache.get("836802207096635432")
    const member = button.clicker.member
     await member.roles.add(role)
}

 */
client.on('clickButton', async button => {
    if(button.id === 'AddRole') {
        const role = button.guild.roles.cache.get("ROL İD")
    const member = button.clicker.member
     await member.roles.add(role)
        button.reply.send('<a:yes:865963544380964864> <@&873213384953331792> Rolün başarılı bir şekilde verildi!', true)
        
    }
})

client.on('clickButton', async button => {
    if(button.id === 'add1') {
        const role = button.guild.roles.cache.get("ROL İD")
    const member = button.clicker.member
     await member.roles.add(role)
        button.reply.send('<a:yes:865963544380964864> <@&873213579212492862> Rolün başarılı bir şekilde verildi!', true)
        
    }
})
client.on('clickButton', async button => {
    if(button.id === 'add2') {
        const role = button.guild.roles.cache.get("ROL İD")
    const member = button.clicker.member
     await member.roles.add(role)
        button.reply.send('<a:yes:865963544380964864> <@&873214129979129917> Rolün başarılı bir şekilde verildi!', true)
        
    }
})
client.login(process.env.TOKEN);