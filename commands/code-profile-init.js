const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("code-profile-init")
    .setDescription("Visual Code Profile com apenas extensões necessaria para o inicio com HTML, CSS e Javascript!"),
    async execute(interaction){
        await interaction.reply("https://github.com/robsonamendonca/GuiaDevJrBot/blob/main/perfil/README.md")
    }
}
