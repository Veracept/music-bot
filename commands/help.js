
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  name: "help",
  description: "Получите информацию о боте и командах.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const musicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('🎸 **Music Commands**')
        .addFields(
           { name: '🎹 Play', value: 'Проигрывать песню по ссылке или тексту из источников' },
        { name: '⏹️ Stop', value: 'Остановить воспроизведение музыки и выйти из голосового канала' },
        { name: '📊 Queue', value: 'Просмотр и управление очередью песен на этом сервере' },
        { name: '⏭️ Skip', value: 'Пропустить текущую воспроизводимую песню' },
        { name: '⏸️ Pause', value: 'Поставить текущую песню на паузу' },
        { name: '▶️ Resume', value: 'Возобновить текущую приостановленную песню' },
        { name: '🔁 Loop', value: 'Переключить режим повторения для очереди и текущей песни' },
        { name: '🔄 Autoplay', value: 'Включить или отключить автопроигрывание [воспроизведение случайных песен]' },
        { name: '⏩ Seek', value: 'Перемотать на определенное время в текущей песне' },
        { name: '⏮️ Previous', value: 'Воспроизвести предыдущую песню в очереди' },
        { name: '🔀 Shuffle', value: 'Перемешать песни в очереди' },
        { name: '📃 Playlist', value: 'Управлять плейлистами' }
        )
        .setImage(`https://cdn.discordapp.com/attachments/1004341381784944703/1165201249331855380/RainbowLine.gif?ex=654f37ba&is=653cc2ba&hm=648a2e070fab36155f4171962e9c3bcef94857aca3987a181634837231500177&`); 

      const basicCommandsEmbed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle('✨ **Basic Commands**')
        .addFields(
        { name: '🏓 Ping', value: 'Проверить задержку бота' },
        { name: '🗑️ Clear', value: 'Очистить очередь песен на этом сервере' },
        { name: '⏱️ Time', value: 'Показать текущее время воспроизведения песни' },
        { name: '🎧 Filter', value: 'Применить фильтры для улучшения звука по вашему вкусу' },
        { name: '🎵 Now Playing', value: 'Показать информацию о текущей воспроизводимой песне' },
        { name: '🔊 Volume', value: 'Регулировать громкость музыки [прослушивание на высокой громкости рискованно]' }
        ) 
       .setImage('https://repository-images.githubusercontent.com/308071706/99d92580-5e7d-11eb-9c84-d97c45f41e74')
      const button1 = new ButtonBuilder()
        .setLabel('YouTube')
        .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
        .setStyle(ButtonStyle.Link);

      const row = new ActionRowBuilder()
        .addComponents(button1);

      interaction.reply({
        embeds: [musicCommandsEmbed, basicCommandsEmbed],
        components: [row]
      }).catch(e => {});
    } catch (e) {
      console.error(e);
    }
  },
};


