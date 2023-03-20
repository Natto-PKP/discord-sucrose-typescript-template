import type { EventHandlerParams } from 'discord-sucrose';

export default ({ args: [member] }: EventHandlerParams<'guildMemberAdd'>) => {
  const role = member.guild.roles.cache.random();
  if (role) member.roles.add(role);
};
