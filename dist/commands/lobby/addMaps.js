"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class AddMapsCommand extends Command_1.default {
    constructor() {
        super("addMap", {
            aliases: ["am", "addmap", "addm"],
            category: "lobby",
            description: "Add Maps to the league",
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
        // if (args.role != undefined) {
        // 	// TODO Split maps from commas
        // 	// TODO Validate maps
        // 	const roleTest = await this.rankRepository.findOne({
        // 		where: {
        // 			discordId: message.guild?.id,
        // 			rankId: args.role.id
        // 		}
        // 	});
        // 	if (roleTest?.rankId !== args.role.id) {
        // 		this.playerRepository.createQueryBuilder()
        // 			.insert()
        // 			.into(Maps)
        // 			.values([{
        // 				discordId: message.guild?.id,
        // 				mapId: args.role.id
        // 			}])
        // 			.execute();
        // 		message.channel.send(this.client.successEmbed(`Successfully added <MAPS HERE>`))
        // 	} else {
        // 		message.channel.send(this.client.errorEmbed("Some kind of error"))
        // 	}
        // }
    }
}
exports.default = AddMapsCommand;
//# sourceMappingURL=addMaps.js.map