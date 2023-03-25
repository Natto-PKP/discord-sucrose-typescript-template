import { Logger as SucroseLogger } from 'discord-sucrose';
import type { EventHandlerParams } from 'discord-sucrose';
import Logger from '../../services/Logger';

export default async ({ sucrose }: EventHandlerParams<'ready'>) => {
  Logger.write(SucroseLogger.style("I'm connected", 'rainbow'));

  await sucrose.commands.define('eval');
};
