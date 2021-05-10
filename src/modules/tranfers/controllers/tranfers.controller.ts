import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common'
import { TranfersService } from 'src/modules/tranfers/services/tranfers.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { TranfersAddDto } from '../dto/tranfers.dto'

@ApiTags('Tranfers Api')
@Controller ('tranfers')
export class TranferController {
  constructor(
    private readonly tranfersService: TranfersService,
  ){}
	
	@Put('addTranfers')
	async addTranfers(@Body() condition: TranfersAddDto) {
		const randomChar = Math.random().toString(36).substring(7);
		const keyName = "Tranfer:" + randomChar
		const data = await this.tranfersService.setRedis(keyName,condition);	
		
		return {status: "ok", key: keyName}
	}
	
}