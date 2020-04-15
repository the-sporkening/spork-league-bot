"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = __importDefault(require("../../struct/Listener"));
class GuildDeleteListener extends Listener_1.default {
    constructor() {
        super("guildDelete", {
            event: "guildDelete",
            emitter: "client",
            category: "client"
        });
    }
    async exec(guild) {
        let guildRecord = await this.guildRepository.findOne({
            where: { discordId: guild.id },
        });
        if (!guildRecord)
            return;
    }
}
exports.default = GuildDeleteListener;
//# sourceMappingURL=guildDelete.js.map