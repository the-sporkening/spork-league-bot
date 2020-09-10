"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SporkLeagueClient_1 = __importDefault(require("../struct/SporkLeagueClient"));
// TODO Add queue to redis
class SettingsProvider {
    constructor() {
        this.client = new SporkLeagueClient_1.default();
    }
    /**
     * Get Settings Cache
     */
    async getSettings(guildId) {
        try {
            const data = await this.client.cache.get(`settings:${guildId}`);
            if (data) {
                return JSON.parse(data);
            }
            else {
                const data = await this.updateSettings(guildId);
                return data;
            }
        }
        catch (e) {
            this.client.logger.error(e);
        }
    }
    /**
     * Update Setting Cache
     */
    async updateSettings(guildId) {
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
            }
            else {
                // const data = await updateSettings();
                // return data;
            }
        }
        catch (e) {
            this.client.logger.error(e);
        }
    }
}
exports.default = SettingsProvider;
//# sourceMappingURL=Settings.js.map