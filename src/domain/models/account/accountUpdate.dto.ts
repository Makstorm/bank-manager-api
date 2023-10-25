import { ApiProperty } from '@nestjs/swagger';

export class AccountUpdateDto {
  @ApiProperty({ type: String })
  public name: string;
}
