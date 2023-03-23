const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js")

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma plataforma selecionada")
            .addOptions({
                label: "Neps Academy",
                description: "Exercícios de Programação. Melhore suas habilidades de programação!",
                value: "NepsAcademy"
                },
                {
                    label: "Beecrowd",
                    description: "Plataforma tem testes analíticos, programação, em mais de 20 linguagens de programação.",
                    value: "beecrowd"
                },
                {
                    label: "The Huxley",
                    description: "Você pode achar facilmente problemas de seu interesse pelo nível de dificuldade e tópicos.",
                    value: "TheHuxley"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("desafios")
        .setDescription("Plataformas oferece lógica simples até problemas mais avançados de algoritmos e estruturas de dados."),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das Plataformas abaixo:", components: [row]})
    }
}