import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common'
import { EmployeeService } from 'src/modules/employee/services/employee.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('employee Api')
@Controller ('employee')
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
  ){}
	
	@Get('getEmployeeDetail/:id')
	async getEmployeeDetail(@Param('id') id: string) {
		const data = await this.employeeService.findText("Employee:employee_"+id);	
		return data
	}
	
	@Get('getAllEmployee')
	async getAllEmployee() {
		const data = await this.employeeService.findAll("*Employee*");	
		let newArrayOfProduct = [];
		
		for(const i in data){
			const value = data[i];
			newArrayOfProduct.push(value.substring(9));
		}
		
		return newArrayOfProduct
	}
	
}