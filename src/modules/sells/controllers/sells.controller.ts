import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common'
import { SellsService } from 'src/modules/sells/services/sells.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { SellsServiceAddDto } from '../dto/sells.dto'

@ApiTags('Seller Api')
@Controller ('sells')
export class SellsController {
  constructor(
    private readonly sellerService: SellsService,
  ){}
	
	@Put('addSelling')
	async addSelling(@Body() condition: SellsServiceAddDto) {
		const randomChar = Math.random().toString(36).substring(7);
		const keyName = "Sell:" + randomChar
		const data = await this.sellerService.setRedis(keyName,condition);	
		
		return {status: "ok", key: keyName}
	}
	
}