import { ApiProperty } from '@nestjs/swagger';
import { IsPositive } from 'class-validator';

export class AccountDto {
  @ApiProperty({ type: String })
  public name: string;

  @ApiProperty({ type: Number })
  @IsPositive()
  public balance: number;
}
