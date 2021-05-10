import { Injectable, Inject } from "@nestjs/common";
import { RedisService } from 'src/modules/redis/redis.service'

@Injectable()
export class TranfersService {
	constructor(
		private sqlRepository: RedisService,
	 ) {}

	async findList(Key: string): Promise<any> {
		return await this.sqlRepository.getList(Key)
	}
	
	async findText(Key: string): Promise<any> {
		return await this.sqlRepository.get(Key)
	}
	
	async findAll(Key: string): Promise<any> {
		return await this.sqlRepository.getAllByKey(Key)
	}
	
	async setRedis(Key: string, Value: any): Promise<any> {
		return await this.sqlRepository.set(Key, Value)
	}

}