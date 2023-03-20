const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("Red")
	.setTitle('Comandos do Git')
	.setURL('https://w7.pngwing.com/pngs/182/979/png-transparent-github-repository-commit-version-control-github-angle-rectangle-logo.png')	
	.setDescription('Comandos mais usados no dia a dia')
	.addFields(
		{ name: '\u200B', value: '\u200B' },
        { name: '$ git init', value: 'inicia o versionamento na pasta atual do seu local.', inline: true },
		{ name: '$ git status', value: 'verifica situação dos arquivos e pasta atual, pendências e etc.', inline: true },
		{ name: '$ git add .', value: 'adiciona os arquivos que estão pendentes ou recentes alterados.', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '$ git commit -m"descrição simples da sua tarefa" ', value: 'commita os arquivos que estão pendentes ou recentes alterados.', inline: true },
        { name: '$ git checkout NOMEDABRANCH" ', value: 'troca de branch atual para outra branch NOMEDABRANCH.', inline: true },
        { name: '$ git pull origin NOMEDABRANCH', value: 'atualiza a branch NOMEDABRANCH na pasta atual do seu local com dos dados do servidor onde esta versionado (ex.: GitHun).', inline: true },
	)

//channel.send({ embeds: [exampleEmbed] });


module.exports = {
    data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Responde comandos mais usado do GIT bash!"),
    async execute(interaction){
        await interaction.reply({ embeds: [exampleEmbed] })
    }
}
