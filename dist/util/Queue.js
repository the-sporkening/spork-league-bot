"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Queue_entity_1 = require("./../entity/Queue.entity");
class QueueProvider {
    constructor() {
        this.queueRepository = typeorm_1.getRepository(Queue_entity_1.Queue);
    }
}
exports.default = QueueProvider;
//# sourceMappingURL=Queue.js.map