"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class RemoveRankCommand extends Command_1.default {
    constructor() {
        super("removeRank", {
            aliases: ["rr", "removerank", "remr"],
            category: "lobby",
            description: "Remove a Rank from the league",
            args: [
                {
                    id: 'role',
                    type: 'roleMention'
                }
            ],
        });
    }
    async exec(message, args) {
        // TODO Add role to database
        // TODO Add args for how many points to reach it
        // TODO Add per guild ranks
        // const roleTest = await this.rankRepository.findOne({
        // 	where: {
        // 		rankId: args.role.id
        // 	}
        // });
        // console.log(roleTest);
        // if (roleTest !== undefined) {
        // 	// if(args.role.id) {
        // 	this.rankRepository.delete({
        // 		discordId: message.guild?.id,
        // 		rankId: args.role.id
        // 	})
        // 	message.channel.send(this.client.successEmbed(`Successfully removed ${args.role.name}`))
        // 	// }
        // } else {
        // 	message.channel.send(this.client.errorEmbed("Rank not found"))
        // }
    }
}
exports.default = RemoveRankCommand;
//# sourceMappingURL=removeRank.js.map