const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("podecast_news_sabado")
    .setDescription("Ouça a melhor PodCast de notícias de tecnologia aos sábados, segundo Robson Mendonça"),
    async execute(interaction){
        await interaction.reply("https://open.spotify.com/show/7kLgm2CDG4aontuQOluFwb")
    }
}