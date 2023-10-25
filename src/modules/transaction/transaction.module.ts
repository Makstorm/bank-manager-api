import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { TransactinServiceTag } from '@domain';

@Module({
  controllers: [TransactionController],
  providers: [{ provide: TransactinServiceTag, useClass: TransactionService }],
  exports: [TransactinServiceTag],
})
export class TransactionModule {}
