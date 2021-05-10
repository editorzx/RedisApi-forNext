import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common'
import { ProductService } from 'src/modules/products/services/products.service'
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { ProductAddDto, ProductEditDto } from '../dto/product.dto'

@ApiTags('Product Api')
@Controller ('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
  ){}

	
	@Get('getList')
	async getList() {
		const data = await this.productService.findList("test");	
		/*for(let i in data){
			console.log(data[i])
		}*/
		
		/*for(const [key, value] of Object.entries(data)){
			console.log(value)
		}
		
		for(const i in data){
			console.log(data[i])
		}*/
		
		  
	   /*data.forEach(function (value){
			console.log(value)	
	   })*/


		return data
	}
	
	@Get('getProductDetail/:name')
	async getProductDetail(@Param('name') name: string) {
		const data = await this.productService.findText("Product:"+name);	
		return data
	}
	
	@Get('getAllProduct')
	async getAllProduct() {
		const data = await this.productService.findAll("*Product*");	
		let newArrayOfProduct = [];
		
		for(const i in data){
			const value = data[i];
			newArrayOfProduct.push(value.substring(8));
		}
		
		return newArrayOfProduct
	}
	
	@Get('removeProduct/:key')
	async removeProduct(@Param('key') key: string) {
		const keyName = "Product:" + key
		const data = await this.productService.removeData(keyName);	
		return {status: "ok", key: keyName}
	}

	
	@Put('addProduct')
	async addProduct(@Body() condition: ProductAddDto) {
	
		const randomChar = Math.random().toString(36).substring(7);
		const keyName = "Product:" + randomChar
		const data = await this.productService.setRedis(keyName, condition);		
		return {status: "ok", name: condition.name, key: keyName}
	}
	
	@Put('editProduct')
	async editProduct(@Body() condition: ProductEditDto) {
		const keyName = "Product:" + condition.key
		const newParam = {
			name: condition.name, 
			catagory: condition.catagory, 
			price: condition.price, 
			barcode: condition.barcode, 
			safetyStock: condition.safetyStock, 
			inStock: condition.inStock
		}
		const data = await this.productService.setRedis(keyName, newParam);		
		return {status: "ok", name: condition.name, key: keyName}
	}
	
}