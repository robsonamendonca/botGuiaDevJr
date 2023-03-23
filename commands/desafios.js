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
                    description: "Nossa plataforma de programação competitiva de última geração tem mais de 2.000 testes analíticos e de programação disponíveis em mais de 20 linguagens de programação diferentes. Todos os testes estão disponíveis em Português e Inglês.",
                    value: "beecrowd"
                },
                {
                    label: "The Huxley",
                    description: "Possui uma base com mais de 1000 problemas para você resolver. Você pode achar facilmente problemas de seu interesse pelo nível de dificuldade e tópicos como: String, Array, Grafo, dentre muitos outros.",
                    value: "TheHuxley"
                }
            )
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("desafios")
        .setDescription("Plataformas oferece uma variedade de desafios de programação, desde problemas de lógica simples até problemas mais avançados de algoritmos e estruturas de dados."),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das Plataformas abaixo:", components: [row]})
    }
}