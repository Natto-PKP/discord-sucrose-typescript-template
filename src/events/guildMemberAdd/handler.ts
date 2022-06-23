import type { EventHandler } from 'discord-sucrose';

const handler: EventHandler<'guildMemberAdd'> = ({ args: [member] }) => {
  console.log(`${member.displayName} entered a guild`);
};

export default handler;
