"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
const Rank_entity_1 = require("../../entity/Rank.entity");
class AddRankCommand extends Command_1.default {
    constructor() {
        super("addRank", {
            aliases: ["ar", "addrank", "addr"],
            category: "lobby",
            description: "Add Rank to the league",
            args: [
                {
                    id: 'role',
                    type: 'roleMention'
                },
                {
                    id: 'points',
                    type: 'number',
                    default: '0'
                }
            ],
        });
    }
    async exec(message, args) {
        // TODO Add role to database
        // TODO Add args for how many points to reach it
        // TODO Add per guild ranks
        var _a, _b;
        if (args.role != undefined) {
            const roleTest = await this.rankRepository.findOne({
                where: {
                    discordId: (_a = message.guild) === null || _a === void 0 ? void 0 : _a.id,
                    rankId: args.role.id
                }
            });
            if ((roleTest === null || roleTest === void 0 ? void 0 : roleTest.rankId) !== args.role.id) {
                this.playerRepository.createQueryBuilder()
                    .insert()
                    .into(Rank_entity_1.Rank)
                    .values([{
                        discordId: (_b = message.guild) === null || _b === void 0 ? void 0 : _b.id,
                        rankId: args.role.id,
                        pointsRequired: args.points
                    }])
                    .execute();
                message.channel.send(this.client.successEmbed(`Successfully registered <@&${args.role.id}> for ${args.points} points`));
            }
            else {
                message.channel.send(this.client.errorEmbed("Rank already exists"));
            }
        }
    }
}
exports.default = AddRankCommand;
//# sourceMappingURL=addRank.js.map