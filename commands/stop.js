const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "stop",
  description: "Останавливает музыку.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({ content: '⚠️ Музыка не играет!!', ephemeral: true });
      }

      queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor('#f1002c')
        .setAuthor({
          name: 'Music Stopped',
          iconURL: 'https://media.discordapp.net/attachments/985264011140562988/1252972638813552640/image.png?ex=66742934&is=6672d7b4&hm=3db4772ba0fce2ff284bd297a50ccb30b690da7dbd831ba2bf48974c3e11cf74&=&format=webp&quality=lossless',
        })
        .setDescription('**Путешествие останавливается, но ритм продолжает жить!**')
        

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};


/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
