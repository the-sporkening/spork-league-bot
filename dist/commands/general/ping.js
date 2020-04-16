"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "general",
            description: "commands.ping.desc"
        });
    }
    async exec(message) {
        return message.channel.send("pong!");
    }
}
exports.default = PingCommand;
//# sourceMappingURL=ping.js.map