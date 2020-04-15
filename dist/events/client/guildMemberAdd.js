"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Listener_1 = __importDefault(require("../../struct/Listener"));
class GuildMemberAddListener extends Listener_1.default {
    constructor() {
        super("guildMemberAdd", {
            event: "guildMemberAdd",
            emitter: "client",
            category: "client"
        });
    }
    async exec(guild) {
        if (guild.id == this.client.config)
            guild.channels.cache.first();
    }
}
exports.default = GuildMemberAddListener;
//# sourceMappingURL=guildMemberAdd.js.map