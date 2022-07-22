import type { Autocomplete } from 'discord-sucrose';

export default <Autocomplete>{
  body: { command: 'image', option: 'animals' },

  exec: ({ interaction }) => {
    interaction.respond([
      { name: 'Ferret', value: 'ferret' },
      { name: 'Cat', value: 'cat' },
      { name: 'Dog', value: 'dog' },
      { name: 'Otter', value: 'Otter' },
    ]);
  },
};
