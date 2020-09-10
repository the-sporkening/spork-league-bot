"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
const Lobby_entity_1 = require("../../entity/Lobby.entity");
class SetupCommand extends Command_1.default {
    constructor() {
        super("setup", {
            aliases: ["setup"],
            category: "general",
            description: "Setup Pug Lobby",
            clientPermissions: ['MANAGE_CHANNELS'],
            userPermissions: ['MANAGE_CHANNELS'],
        });
    }
    async exec(message) {
        var _a;
        // TODO Setup pug lobby channel
        // Create a spork league lobby category
        await ((_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.create('Spork League', { type: "category", reason: 'Created league channel' }).then(category => {
            var _a;
            // TODO Check if guild is patron
            // TODO Check if guild has 1 lobby
            // Save lobby category to lobby record
            this.lobbyRepository.createQueryBuilder()
                .insert()
                .into(Lobby_entity_1.Lobby)
                .values([{ discordId: category.guild.id, categoryId: category.id }])
                .execute();
            category.guild.channels.create("lobby", { parent: category.id, type: "text" })
                .then(channel => {
                // Save lobby text channel to lobby record
                this.lobbyRepository.createQueryBuilder()
                    .update(Lobby_entity_1.Lobby)
                    .set({ lobbyId: channel.id })
                    .where("categoryId = :categoryId", { categoryId: category.id })
                    .execute();
                this.client.delay(200);
            });
            category.guild.channels.create("Waiting Room", { parent: category.id, type: "voice" })
                .then(channel => {
                // Save Voice Waiting room to lobby record
                this.lobbyRepository.createQueryBuilder()
                    .update(Lobby_entity_1.Lobby)
                    .set({ waitingRoomId: channel.id })
                    .where("categoryId = :categoryId", { categoryId: category.id })
                    .execute();
                this.client.delay(200);
            });
            let channels = category.children.size;
            this.client.logger.info(`Created lobby record for ${(_a = message.guild) === null || _a === void 0 ? void 0 : _a.id} with ${channels} channels`);
        }).catch(console.error));
        return message.channel.send("Created Lobby!");
    }
}
exports.default = SetupCommand;
//# sourceMappingURL=setup.js.map