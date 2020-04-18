"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class QueueCommand extends Command_1.default {
    constructor() {
        super("queue", {
            aliases: ["q", "queue", "join", "j"],
            category: "lobby",
            description: "Join the lobby queue"
        });
    }
    async exec(message) {
        // TODO Add user to lobby queue
        // TODO When lobby gets full start Matchmaking
        // TODO Select amount of players based on max team size
    }
}
exports.default = QueueCommand;
//# sourceMappingURL=queue.js.map