import type { SelectMenu } from 'discord-sucrose';

export default <SelectMenu>{
  data: {
    type: 'SELECT_MENU',
    customId: 'select-me',
    placeholder: 'Select me !',
    options: [
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
      { label: 'I love ferret !', value: 'ferret' },
    ],
  },

  exec: async ({ interaction }) => {
    await interaction.reply('I LOVE FERRET !!!');
  },
};
