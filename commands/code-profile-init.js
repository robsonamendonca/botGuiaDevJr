const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("code-profile-init")
    .setDescription("Visual Code versão online!"),
    async execute(interaction){
        await interaction.reply("https://github.com/robsonamendonca/GuiaDevJrBot/blob/main/perfil/README.md")
    }
}
