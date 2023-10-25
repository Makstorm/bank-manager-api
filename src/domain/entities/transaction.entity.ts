import { TransactionType } from 'src/core';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { AccountEntity } from './bank.entiti';
import { CategoryEntity } from './category.entity';

@Entity('transaction')
export class TransactionEntity extends AbstractEntity {
  @Column()
  public amount: number;

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.EXPENCE,
  })
  public type: TransactionType;

  @ManyToOne(() => AccountEntity, (account) => account.transactions, {
    cascade: true,
  })
  @JoinColumn({ name: 'bankId' })
  public account: AccountEntity;

  @Column()
  public accountId: string;

  @ManyToMany(() => CategoryEntity, (category) => category.transactions)
  @JoinTable({
    name: 'transaction_categories',
    joinColumn: {
      name: 'transactionId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'categoryId',
      referencedColumnName: 'id',
    },
  })
  public categories: CategoryEntity[];
}
