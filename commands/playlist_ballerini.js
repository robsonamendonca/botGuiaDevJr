const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("playlist_ballerini")
    .setDescription("Ouça a melhor playlist de estudos, segundo Rafaella Ballerini - Rock!"),
    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/5TUxgTIxzLbLVh7RUf9V8i?si=d79ad3b1a72840b6")
    }
}