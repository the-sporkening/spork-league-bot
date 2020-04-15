"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const SporkLeagueClient_1 = __importDefault(require("./SporkLeagueClient"));
const Guild_entity_1 = require("../entity/Guild.entity");
const typeorm_1 = require("typeorm");
class SporkLeagueListener extends discord_akairo_1.Listener {
    constructor(id, options) {
        super(id, options);
        this.client = new SporkLeagueClient_1.default();
        this.guildRepository = typeorm_1.getRepository(Guild_entity_1.Guild);
    }
}
exports.default = SporkLeagueListener;
//# sourceMappingURL=Listener.js.map