import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common'
import { DealerService } from 'src/modules/dealers/services/dealers.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { DealersAddDto, DealersEditDto } from '../dto/dealers.dto'

@ApiTags('Dealer Api')
@Controller ('dealers')
export class DealerController {
  constructor(
    private readonly dealersService: DealerService,
  ){}
	
	@Get('getDealersDetail/:id')
	async getDealersDetail(@Param('id') id: string) {
		const data = await this.dealersService.findText("Dealers:"+id);	
		return data
	}
	
	@Get('getAllDealer')
	async getAllDealer() {
		const data = await this.dealersService.findAll("*Dealer*");	
		let newArrayOfProduct = [];
		
		for(const i in data){
			const value = data[i];
			newArrayOfProduct.push(value.substring(8));
		}
		
		return newArrayOfProduct
	}
	
	@Put('addDealers')
	async addDealers(@Body() condition: DealersAddDto) {
	
		const randomChar = Math.random().toString(36).substring(7);
		const keyName = "Dealers:" + randomChar
		const data = await this.dealersService.setRedis(keyName, condition);		
		return {status: "ok", name: condition.name, key: keyName}
	}
	
	@Put('editDealers')
	async editDealers(@Body() condition: DealersEditDto) {
		const keyName = "Dealers:" + condition.key
		const newParam = {
			name: condition.name, 
			tel: condition.tel
		}
		const data = await this.dealersService.setRedis(keyName, newParam);		
		return {status: "ok", name: condition.name, key: keyName}
	}
	
	@Get('removeDealers/:key')
	async removeDealers(@Param('key') key: string) {
		const keyName = "Dealers:" + key
		const data = await this.dealersService.removeData(keyName);	
		return {status: "ok", key: keyName}
	}
}