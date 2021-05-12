import { IsString, IsNumber, IsOptional, IsNumberString, IsDate } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer';


export class SellsServiceAddDto {

  @ApiProperty()
  //@IsOptional()
  @IsString()
  readonly product: string
  
  @ApiProperty()
  @IsNumber()
  readonly quantity: number
  
  @ApiProperty()
  @IsNumber()
  readonly price: number  
  
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  readonly time: Date
  
  @ApiProperty()
  @IsString()
  readonly seller: string
  
  @ApiProperty()
  @IsOptional()
  @IsString()
  readonly customeruId: string

}
