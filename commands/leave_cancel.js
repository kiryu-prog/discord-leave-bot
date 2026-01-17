const { SlashCommandBuilder } = require('discord.js');
const schedule = require('../schedule');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leave_cancel')
    .setDescription('予約したVC退出をキャンセルします'),

  async execute(interaction) {
    const success = schedule.cancel(interaction.user.id);

    if (success) {
      await interaction.reply({
        content: 'VC退出の予約をキャンセルしました。',
        ephemeral: true
      });
    } else {
      await interaction.reply({
        content: 'キャンセルできる予約がありません。',
        ephemeral: true
      });
    }
  }
};
