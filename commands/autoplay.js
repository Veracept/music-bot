
const db = require("../mongoDB");
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "autoplay",
  description: "Включить автозапуск очереди.",
  options: [],
  permissions: "0x0000000000000800",
  run: async (client, interaction) => {
    try {
      const queue = client?.player?.getQueue(interaction?.guild?.id);
      if (!queue || !queue?.playing) {
        return interaction?.reply({ content: '⚠️ Музыка не играет!!', ephemeral: true });
      }
      
      queue?.toggleAutoplay();
      
      const embed = new EmbedBuilder()
        .setColor('#2f58fe')
        .setTitle('Your Music, Your Call!!')
        .setDescription(queue?.autoplay ? '**✅ Автовоспроизведение ВКЛ**' : '**❌ Автовоспроизведение ВЫКЛ.**')
        
      
      interaction?.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};

