import { Repository, getRepository } from 'typeorm';
import SporkLeagueClient from '../struct/SporkLeagueClient';
// TODO Add queue to redis
class QueueProvider {
	client: SporkLeagueClient = new SporkLeagueClient();
	constructor() {
	}
	/**
	 * joinQueue
	 */
	public async joinQueue(guildId: String, userId: String) {
		try {
			this.client.cache.set(`queue:${guildId}:${userId}`, ``);
		} catch (err) {
			this.client.logger.error(err, { tag: "Queue" });
		}
	}
	/**
	 * leaveQueue
	 */
	public async leaveQueue(guildId: String, userId: String) {
		try {
			this.client.cache.del(`queue:${guildId}:${userId}`);
		} catch (err) {
			this.client.logger.error(err, { tag: "Queue" });
		}
	}
}


export default QueueProvider;