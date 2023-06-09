// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const Discord = require("discord.js");

const dotenv = require('dotenv');
dotenv.config();
const { TOKEN } = process.env;

const fs = require("node:fs");
const path = require("node:path");

const commandsPath = path.join(__dirname, "commands");
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

//t({ intents: [ "Guilds", "GuildMembers", "MessageContent", "GuildMessages" ]});
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();


for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)

    } else {
        console.log(`Comando em  ${filePath} esta sem data ou execute!`);
    }
}

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
    
    console.log(`Estou online em ${c.user.tag}`)

    c.user.setActivity({ 
        name: 'GuiaDevJr Bot',
        type: c.application.Playing
    });  
       

});

// Log in to Discord with your client's token
client.login(TOKEN);

//Listener de interações com o bot
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        //doc_tech
        if (selected == "javascript"){
            await interaction.reply("Documentação do Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript")
        } else if (selected == "python"){
            await interaction.reply("Documentação do Python: https://www.python.org")
        } else if (selected == "csharp"){
            await interaction.reply("Documentação do C#: https://learn.microsoft.com/en-us/dotnet/csharp/")
        } else if (selected == "java"){
            await interaction.reply("Documentação do Java: https://www.oracle.com/br/java/")
        } else if (selected == "php"){
            await interaction.reply("Documentação do PHP: https://www.php.net/")
        } else if (selected == "outras"){
            await interaction.reply("Documentação de todas as outras (DevDocs): https://devdocs.io/")
        } else if (selected == "discordjs"){
            await interaction.reply("Documentação do Discord.js: https://discordjs.guide/#before-you-begin")
        }
        //desafios
        if (selected == "NepsAcademy"){
            await interaction.reply("Neps Academy - https://neps.academy/br/exercises")
        } else if (selected == "beecrowd"){
            await interaction.reply("beecrowd - https://www.beecrowd.com.br/judge/pt/login")
        } else if (selected == "TheHuxley"){
            await interaction.reply("The Huxley - https://www.thehuxley.com/problems?page=1&problemType=ALGORITHM")
        }        
    }    
    if (!interaction.isChatInputCommand())
        return

    const command = interaction.client.commands.get(interaction.commandName);
    if(!command){
        console.error("Comando não encontrado!"); 
        return       
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply("Houve um erro ao tentar executar esse comando!");
    }
})