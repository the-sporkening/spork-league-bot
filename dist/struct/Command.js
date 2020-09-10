"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const typeorm_1 = require("typeorm");
const Guild_entity_1 = require("../entity/Guild.entity");
const Lobby_entity_1 = require("../entity/Lobby.entity");
const Player_entity_1 = require("../entity/Player.entity");
class CustomCommand extends discord_akairo_1.Command {
    constructor(id, options) {
        super(id, options);
        this.client;
        this.args = options.args;
        this.categoryName = options.category;
        this.guildRepository = typeorm_1.getRepository(Guild_entity_1.Guild);
        this.lobbyRepository = typeorm_1.getRepository(Lobby_entity_1.Lobby);
        this.playerRepository = typeorm_1.getRepository(Player_entity_1.Player);
    }
}
exports.default = CustomCommand;
//# sourceMappingURL=Command.js.map