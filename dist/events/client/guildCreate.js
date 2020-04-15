"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = __importDefault(require("../../struct/Listener"));
class GuildCreateListener extends Listener_1.default {
    constructor() {
        super("guildCreate", {
            event: "guildCreate",
            emitter: "client",
            category: "client"
        });
    }
    async exec(guild) {
        let guildRecord = await this.guildRepository.findOne({
            where: { discordId: guild.id },
        });
        if (guildRecord)
            return;
        this.client.logger.info(`Created guild record for ${guild.id}`);
        guildRecord = this.guildRepository.create({
            discordId: guild.id,
        });
        this.guildRepository.save(guildRecord);
    }
}
exports.default = GuildCreateListener;
//# sourceMappingURL=guildCreate.js.map