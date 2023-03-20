import type { EventHandlerParams } from 'discord-sucrose';
import { ChannelType, TextChannel } from 'discord.js';

export default ({ args: [member] }: EventHandlerParams<'guildMemberAdd'>) => {
  const channels = member.guild.channels.cache.filter((ch) => ch.type === ChannelType.GuildText);
  const channel = channels.random() as TextChannel;
  if (channel) channel.send(`${member.displayName} entered a guild`);
};
