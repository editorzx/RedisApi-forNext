import { IsString, IsNumber, IsOptional, IsNumberString, IsDate } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer';


export class TranfersAddDto {

  @ApiProperty()
  //@IsOptional()
  @IsString()
  readonly product: string
  
  @ApiProperty()
  @IsString()
  readonly branch: string
  
  
  @ApiProperty()
  @IsString()
  readonly secondbranch: string
  
  @ApiProperty()
  @IsNumber()
  readonly quantity: number
  
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  readonly datetime: Date

}
