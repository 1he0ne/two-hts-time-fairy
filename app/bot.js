// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// const { token } = require('../config.json');
const { token } = process.env.ACCESS_TOKEN;

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	}
	else if (commandName === 'server') {
		await interaction.reply('Server info.');
	}
	else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
	else if (commandName === 'nothing') {
		await interaction.reply('Nothing...');
	}
});

client.login(token);
