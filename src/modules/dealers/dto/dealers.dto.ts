import { IsString, IsNumber, IsOptional, IsNumberString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer';


export class DealersAddDto {

  @ApiProperty()
  //@IsOptional()
  @IsString()
  readonly name: string
  
  @ApiProperty()
  @IsString()
  readonly tel: string
  

}

export class DealersEditDto {

  @ApiProperty()
  //@IsOptional()
  @IsString()
  readonly name: string
  
  @ApiProperty()
  @IsString()
  readonly tel: string
  
  @ApiProperty()
  @IsString()
  readonly key: string
}

