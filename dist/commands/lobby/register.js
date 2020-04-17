"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class CreateLobbyCommand extends Command_1.default {
    constructor() {
        super("r", {
            aliases: ["r", "register", "reg"],
            category: "lobby",
            description: "Register for the league"
        });
    }
    async exec(message) {
        var _a;
        this.playerRepository.create({ userId: (_a = message.member) === null || _a === void 0 ? void 0 : _a.id });
    }
}
exports.default = CreateLobbyCommand;
//# sourceMappingURL=register.js.map