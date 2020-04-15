import Client from "./struct/SporkLeagueClient";
import config from './config.js';
const client = new Client({ defaultPrefix: config.defaultPrefix });
try {
  client.login(config.token);
} catch (e) {
  client.logger.stacktrace(e)
}

export default client;