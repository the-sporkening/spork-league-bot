import { Repository, getRepository } from 'typeorm';
import SporkLeagueClient from '../struct/SporkLeagueClient';
// TODO Add queue to redis
class SettingsProvider {
	client: SporkLeagueClient = new SporkLeagueClient();
	constructor() {

	}
	/**
	 * Get Settings Cache
	 */
	public async getSettings(guildId: String): Promise<IGuildSettings | void> {
		try {

			const data = await this.client.cache.get(`settings:${guildId}`);

			if (data) {
				return JSON.parse(data);
			} else {
				const data = await this.updateSettings(guildId);
				return data;
			}
		} catch (e) {
			this.client.logger.error(e);
		}
	}
	/**
	 * Update Setting Cache
	 */
	public async updateSettings(guildId: String): Promise<IGuildSettings | void> {
		try {

			// const repos = await getRepos();
			// const data = JSON.stringify(repos);

			// await RedisClient.set(`repos:notifyteam`, data);
			// await RedisClient.expire(`repos:notifyteam`, 1800);

			// return repos;
			// TODO Grab settings from db
			// TODO Store settings in cache
			const data = await this.client.cache.set(`settings:${guildId}`, ``);


			if (data) {
				// return JSON.parse(data);
			} else {
				// const data = await updateSettings();
				// return data;
			}
		} catch (e) {
			this.client.logger.error(e);
		}
	}
}


export default SettingsProvider;