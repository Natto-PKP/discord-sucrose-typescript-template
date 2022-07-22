import type { Button } from 'discord-sucrose';

export default <Button<'base'>>{
  data: {
    type: 'BUTTON',
    customId: 'useme',
    style: 'DANGER',
  },

  exec: async ({ interaction }) => {
    await interaction.reply('Yeeaaaaah !');
  },
};
