"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class CreateLobbyCommand extends Command_1.default {
    constructor() {
        super("cl", {
            aliases: ["cl"],
            category: "general",
            description: "Create Lobby Channel"
        });
    }
    async exec(message) {
        var _a, _b;
        // TODO Check if cmd is on main server
        // TODO Create multiple lobby types
        let lobbyRecord = this.lobbyRepository.findOne({
            where: { discordId: (_a = message.guild) === null || _a === void 0 ? void 0 : _a.id },
        });
        if (lobbyRecord)
            return;
        // Create a spork league lobby channel
        await ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.channels.create('Spork League', { type: "category", reason: 'Created main league channel' }).then(category => {
            var _a, _b;
            category.guild.channels.create("lobby", { parent: category.id, type: "text" })
                .then(channel => {
            });
            category.guild.channels.create("Waiting Room", { parent: category.id, type: "voice" })
                .then(channel => {
            });
            this.client.logger.info(`Created lobby record for ${(_a = message.guild) === null || _a === void 0 ? void 0 : _a.id}`);
            let lobbyRecord = this.lobbyRepository.create({ discordId: (_b = message.guild) === null || _b === void 0 ? void 0 : _b.id });
            this.lobbyRepository.save(lobbyRecord);
        }).catch(console.error));
        return message.channel.send("Created Lobby!");
    }
}
exports.default = CreateLobbyCommand;
//# sourceMappingURL=createLobby.js.map