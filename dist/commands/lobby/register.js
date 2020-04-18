"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
const Player_entity_1 = require("../../entity/Player.entity");
class RegisterCommand extends Command_1.default {
    constructor() {
        super("register", {
            aliases: ["r", "register", "reg"],
            category: "lobby",
            description: "Register for the league"
        });
    }
    async exec(message) {
        var _a, _b, _c;
        // TODO Assign role on user register
        const playerTest = await this.playerRepository.findOne({ where: { userId: (_a = message.member) === null || _a === void 0 ? void 0 : _a.id } });
        if ((playerTest === null || playerTest === void 0 ? void 0 : playerTest.userId) !== ((_b = message.member) === null || _b === void 0 ? void 0 : _b.id)) {
            this.playerRepository.createQueryBuilder()
                .insert()
                .into(Player_entity_1.Player)
                .values([{ userId: (_c = message.member) === null || _c === void 0 ? void 0 : _c.id }])
                .execute();
            let regEmbed = this.client.successEmbed("Registered!");
            message.channel.send(regEmbed);
        }
        else {
            let regEmbed = this.client.errorEmbed("You are already registered.");
            message.channel.send(regEmbed);
        }
    }
}
exports.default = RegisterCommand;
//# sourceMappingURL=register.js.map