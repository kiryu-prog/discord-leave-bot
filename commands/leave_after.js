const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leave_after')
    .setDescription('指定分後にVCから退出します')
    .addIntegerOption(option =>
      option.setName('minutes')
        .setDescription('何分後に抜けるか')
        .setRequired(true)
    ),

  async execute(interaction) {
    const minutes = interaction.options.getInteger('minutes');
    const member = interaction.member;

    if (!member.voice.channel) {
      return interaction.reply({ content: 'VCに参加していません。', ephemeral: true });
    }

    await interaction.reply({
      content: `${minutes}分後にVCから退出します。`,
      ephemeral: true
    });

    setTimeout(async () => {
      if (member.voice.channel) {
        await member.voice.disconnect();
      }
    }, minutes * 60 * 1000);
  }
};
