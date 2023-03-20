const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("code")
    .setDescription("Visual Code versão online!"),
    async execute(interaction){
        await interaction.reply("https://vscode.dev/")
    }
}
