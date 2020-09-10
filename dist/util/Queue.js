"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SporkLeagueClient_1 = __importDefault(require("../struct/SporkLeagueClient"));
// TODO Add queue to redis
class QueueProvider {
    constructor() {
        this.client = new SporkLeagueClient_1.default();
    }
    /**
     * joinQueue
     */
    async joinQueue(guildId, userId) {
        try {
            this.client.cache.set(`queue:${guildId}:${userId}`, ``);
        }
        catch (err) {
            this.client.logger.error(err, { tag: "Queue" });
        }
    }
    /**
     * leaveQueue
     */
    async leaveQueue(guildId, userId) {
        try {
            this.client.cache.del(`queue:${guildId}:${userId}`);
        }
        catch (err) {
            this.client.logger.error(err, { tag: "Queue" });
        }
    }
}
exports.default = QueueProvider;
//# sourceMappingURL=Queue.js.map