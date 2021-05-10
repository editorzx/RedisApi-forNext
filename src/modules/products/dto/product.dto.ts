import { IsString, IsNumber, IsOptional, IsNumberString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer';


export class ProductAddDto {

  @ApiProperty()
  //@IsOptional()
  @IsString()
  readonly name: string
  
  @ApiProperty()
  @IsString()
  readonly catagory: string
  
  @ApiProperty()
  @IsNumber()
  readonly price: number
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly barcode: string
  
  @ApiProperty()
  @IsNumber()
  readonly safetyStock: number
  
  @ApiProperty()
  @IsNumber()
  readonly inStock: number

}

export class ProductEditDto {
	
  @ApiProperty()
  @IsString()
  readonly key: string
  
  @ApiProperty()
  //@IsOptional()
  @IsString()
  readonly name: string
  
  @ApiProperty()
  @IsString()
  readonly catagory: string
  
  @ApiProperty()
  @IsNumber()
  readonly price: number
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly barcode: string
  
  @ApiProperty()
  @IsNumber()
  readonly safetyStock: number
  
  @ApiProperty()
  @IsNumber()
  readonly inStock: number

}
