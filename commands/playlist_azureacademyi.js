const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("playlist_azureacademy")
    .setDescription("Ouça a melhor playlist de estudos, segundo Azure Acadmey (Rubens) - Rock!"),
    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/3LlhNmG9xbktUBB92b2h8C?si=99827cbdf048454c")
    }
}