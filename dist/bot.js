"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SporkLeagueClient_1 = __importDefault(require("./struct/SporkLeagueClient"));
const config_js_1 = __importDefault(require("./config.js"));
const client = new SporkLeagueClient_1.default({ defaultPrefix: config_js_1.default.defaultPrefix });
try {
    client.login(config_js_1.default.token);
}
catch (e) {
    client.logger.stacktrace(e);
}
exports.default = client;
//# sourceMappingURL=bot.js.map