"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
const Queue_entity_1 = require("./../../entity/Queue.entity");
class QueueCommand extends Command_1.default {
    constructor() {
        super("queue", {
            aliases: ["q", "queue", "join", "j"],
            category: "lobby",
            description: "Join the lobby queue"
        });
    }
    async exec(message) {
        // TODO When lobby gets full start Matchmaking
        // TODO Select amount of queues based on max team size
        // TODO check if the user is queue banned
        // TODO check if command is being sent in the lobby channel
        var _a, _b, _c, _d, _e, _f, _g;
        // Check if user is in queue
        const queueTest = await this.queueRepository.findOne({
            where: {
                userId: (_a = message.member) === null || _a === void 0 ? void 0 : _a.id
            }
        });
        // Amount of users in queue
        const queueCount = await this.queueRepository.findAndCount({
            where: {
                lobbyId: (_b = message.channel) === null || _b === void 0 ? void 0 : _b.id
            }
        });
        if ((queueTest === null || queueTest === void 0 ? void 0 : queueTest.userId) !== ((_c = message.member) === null || _c === void 0 ? void 0 : _c.id)) {
            // Add user to queue if not already in one
            await this.queueRepository.createQueryBuilder()
                .insert()
                .into(Queue_entity_1.Queue)
                .values([{ discordId: (_d = message.guild) === null || _d === void 0 ? void 0 : _d.id, lobbyId: (_e = message.channel) === null || _e === void 0 ? void 0 : _e.id, userId: (_f = message.member) === null || _f === void 0 ? void 0 : _f.id }])
                .execute();
            // Queue Embed
            let regEmbed = this.client.successEmbed(`<@${(_g = message.member) === null || _g === void 0 ? void 0 : _g.id}> joined the queue **[ ${queueCount[1] + 1} / 10 ]**`);
            message.channel.send(regEmbed);
        }
        else {
            // Delete user if in queue already
            this.queueRepository.createQueryBuilder()
                .delete()
                .from(Queue_entity_1.Queue)
                .where("lobbyId = :lobbyId", { lobbyId: message.channel.id })
                .execute();
            let regEmbed = this.client.errorEmbed("You have been removed from the queue");
            message.channel.send(regEmbed);
        }
    }
}
exports.default = QueueCommand;
//# sourceMappingURL=queue.js.map