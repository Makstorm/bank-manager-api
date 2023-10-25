import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AccountServiceTag } from '@domain';

@Module({
  controllers: [AccountController],
  providers: [{ provide: AccountServiceTag, useClass: AccountService }],
})
export class AccountModule {}
