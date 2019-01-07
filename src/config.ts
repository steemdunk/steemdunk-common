import * as yaml from 'js-yaml';
import * as fs from 'fs';

export interface NetOptions {
  address_prefix: string;
  chain_id: string;
  node: string;
}

export interface SteemConnect {
  host: string;
  redirect_uri: string;
  client_secret: string;
}

export interface SteemSettings {
  broadcast_account: string;
  posting_wif: string;
  active_wif: string;
  voting_power: number;
}

export interface Config {
  steem_net: NetOptions;
  steem_settings: SteemSettings;
  steem_connect: SteemConnect;
}

export const Config: Config = {} as any;
if (process.env.NODE_ENV !== 'TEST') {
  const file = process.env.SD_CONFIG || 'config.yml';
  const data = fs.readFileSync(file).toString('utf8');
  const raw = yaml.safeLoad(data);

  Config.steem_net = raw.steem_net;
  Config.steem_settings = raw.steem_settings;
  Config.steem_connect = raw.steem_connect;
}

export function setConfig(conf: Config) {
  Object.assign(Config, conf);
}
