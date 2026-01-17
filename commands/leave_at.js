const { SlashCommandBuilder } = require('discord.js');
const schedule = require('../schedule');

function getDelayUntil(timeStr) {
  const [h, m] = timeStr.split(':').map(Number);

  if (
    isNaN(h) || isNaN(m) ||
    h < 0 || h > 23 ||
    m < 0 || m > 59
  ) {
    return null;
  }

  const now = new Date();
  const target = new Date();

  target.setHours(h, m, 0, 0);
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  return target - now;
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leave_at')
    .setDescription('指定時刻にVCから退出します')
    .addStringOption(option =>
      option.setName('time')
        .setDescription('時刻 (HH:MM)')
        .setRequired(true)
    ),

  async execute(interaction) {
    const time = interaction.options.getString('time');
    const member = interaction.member;

    if (!member.voice.channel) {
      return interaction.reply({
        content: 'VCに参加していません。',
        ephemeral: true
      });
    }

    const delay = getDelayUntil(time);
    if (delay === null) {
      return interaction.reply({
        content: '時刻は HH:MM 形式で指定してください。',
        ephemeral: true
      });
    }

    // 既存予約をキャンセル
    schedule.cancel(member.id);

    const timeout = setTimeout(async () => {
      if (member.voice.channel) {
        await member.voice.disconnect();
      }
      schedule.cancel(member.id);
    }, delay);

    schedule.set(member.id, timeout);

    await interaction.reply({
      content: `${time} にVCから退出します。`,
      ephemeral: true
    });
  }
};
