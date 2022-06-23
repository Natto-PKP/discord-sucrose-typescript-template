import { Sucrose } from 'discord-sucrose';
import { Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

Sucrose.build({
  intents: [Intents.FLAGS.GUILDS],
  env: { ext: 'ts', source: 'src' },
});
