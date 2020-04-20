import { Repository, getRepository } from 'typeorm';
import { Queue } from './../entity/Queue.entity';
class QueueProvider {
	queueRepository: Repository<Queue>;
	constructor() {
		this.queueRepository = getRepository(Queue);
	  }
}

export default QueueProvider;