import type { EventHandlerParams } from 'discord-sucrose';
import Logger from '../../services/Logger';

export default async ({ sucrose }: EventHandlerParams<'ready'>) => {
  Logger.write("I'm connected !");

  await sucrose.commands.define('eval');
};
