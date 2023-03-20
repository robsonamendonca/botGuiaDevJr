const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName("toolbox")
    .setDescription("Criado em 2012, o 4Devs é um portal com ferramentas online e gratuitas para programadores."),
    async execute(interaction){
        await interaction.reply("https://www.4devs.com.br/")
    }
}
