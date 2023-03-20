const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("podecast_news_dia")
    .setDescription("Ouça a melhor PodCast de notícias de tecnologia diariamente, segundo Robson Mendonça"),    
    async execute(interaction){
        await interaction.reply("https://open.spotify.com/show/4B6cfrqCmnlXi5sTgzOWij")
    }
}