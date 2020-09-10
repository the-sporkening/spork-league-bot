import Client from "./struct/SporkLeagueClient";
import config from './config.js';

export default class BotClient {
  constructor() {
    const client = new Client();
    try {
      client.login(config.token);
    } catch (e) {
      client.logger.stacktrace(e)
    }
  }
}
