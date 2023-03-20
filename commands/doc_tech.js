const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documentação de Javascript",
                value: "javascript"
                },
                {
                    label: "python",
                    description: "Veja a documentação de Python",
                    value: "python"
                },
                {
                    label: "C#",
                    description: "Veja a documentação de C#",
                    value: "csharp"
                },
                {
                    label: "java",
                    description: "Veja a documentação de Java",
                    value: "java"
                },
                {
                    label: "PHP",
                    description: "Veja a documentação de PHP",
                    value: "php"
                },
                {
                    label: "Outras (DevDocs)",
                    description: "Veja a documentação de outras liguagens no DevDocs",
                    value: "outras"
                },                
                {
                    label: "discord.js",
                    description: "Veja a documentação de Discord.js",
                    value: "discordjs"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("doc_tech")
        .setDescription("Acesse a documentação da tecnologia que quiser"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das techs abaixo:", components: [row]})
    }
}