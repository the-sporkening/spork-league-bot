"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class CreateLobbyCommand extends discord_akairo_1.Command {
    constructor() {
        super("cl", {
            aliases: ["cl"],
            category: "categories.bot",
            description: "Create Lobby Channel"
        });
    }
    async exec(message) {
        return message.channel.send("pong!");
    }
}
exports.default = CreateLobbyCommand;
//# sourceMappingURL=createLobby.js.map