import { Injectable, Inject } from "@nestjs/common";
import { RedisService } from 'src/modules/redis/redis.service'

@Injectable()
export class EmployeeService {
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

}