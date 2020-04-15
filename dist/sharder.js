"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const path_1 = __importDefault(require("path"));
// const path = require.resolve("./bot");
try {
    const manager = new discord_js_1.ShardingManager(path_1.default.join("dist", "bot.js"), {
        totalShards: 1,
        mode: "process"
    });
    manager.spawn();
    manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
}
catch (e) {
    /* tslint:disable */
    console.error(e);
    process.exit(1);
}
//# sourceMappingURL=sharder.js.map