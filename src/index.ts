import { Sucrose } from 'discord-sucrose';
import { GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

Sucrose.build({
  env: { ext: 'ts', source: 'src' },
  intents: [GatewayIntentBits.Guilds],
  partials: ['CHANNEL'],
});
