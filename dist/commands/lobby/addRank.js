"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
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
            userPermissions(message) {
                var _a;
                if (!((_a = message.member) === null || _a === void 0 ? void 0 : _a.roles.cache.map(role => { role.name == "Moderator"; }))) {
                    return 'Moderator';
                }
                return null;
            }
        });
    }
    async exec(message, args) {
        // TODO Check if user has league moderator role
        // if (args.role != undefined) {
        // 	const roleTest = await this.rankRepository.findOne({
        // 		where: {
        // 			discordId: message.guild?.id,
        // 			rankId: args.role.id
        // 		}
        // 	});
        // 	if (roleTest?.rankId !== args.role.id) {
        // 		this.playerRepository.createQueryBuilder()
        // 			.insert()
        // 			.into(Rank)
        // 			.values([{
        // 				discordId: message.guild?.id,
        // 				rankId: args.role.id,
        // 				pointsRequired: args.points
        // 			}])
        // 			.execute();
        // 		message.channel.send(this.client.successEmbed(`Successfully registered <@&${args.role.id}> for ${args.points} points`))
        // 	} else {
        // 		message.channel.send(this.client.errorEmbed("Rank already exists"))
        // 	}
        // }
    }
}
exports.default = AddRankCommand;
//# sourceMappingURL=addRank.js.map