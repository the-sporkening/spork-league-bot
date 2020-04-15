"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class HelpCommand extends Command_1.default {
    constructor() {
        super("help", {
            aliases: ["help"],
            category: "categories.bot",
            description: "commands.help.desc",
            args: [
                {
                    id: "command",
                    description: "commands.help.args.command.desc",
                },
            ],
        });
    }
    async exec(message, args) {
    }
}
exports.default = HelpCommand;
//# sourceMappingURL=help.js.map