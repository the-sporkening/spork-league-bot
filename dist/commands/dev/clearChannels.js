"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Command_1 = __importDefault(require("../../struct/Command"));
class ClearChannelsCommand extends Command_1.default {
    constructor() {
        super("dcc", {
            aliases: ["dcc"],
            category: "dev",
            description: "Clear all channels except lobby"
        });
    }
    async exec(message) {
        var _a, _b;
        let channels = (_a = message.guild) === null || _a === void 0 ? void 0 : _a.channels.cache;
        channels === null || channels === void 0 ? void 0 : channels.forEach(channel => {
            channel.delete();
        });
        await ((_b = message.guild) === null || _b === void 0 ? void 0 : _b.channels.create("lobby", { type: "text" }));
    }
}
exports.default = ClearChannelsCommand;
//# sourceMappingURL=clearChannels.js.map