import { Logger } from 'discord-sucrose';
import type { EventHandler } from 'discord-sucrose';

const handler: EventHandler<'ready'> = async ({ sucrose }) => {
  Logger.write("I'm connected !");

  await sucrose.commands.define('eval');
};

export default handler;
