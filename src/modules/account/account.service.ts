import {
  AccountDto,
  AccountEntity,
  AccountUpdateDto,
  IAccountService,
} from '@domain';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountService implements IAccountService {
  public async create(dto: AccountDto): Promise<AccountEntity> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<AccountEntity> {
    throw new Error('Method not implemented.');
  }
  public async getOne(id: string): Promise<AccountEntity> {
    throw new Error('Method not implemented.');
  }
  public async getAll(): Promise<AccountEntity[]> {
    throw new Error('Method not implemented.');
  }
  public async update(
    id: string,
    dto: AccountUpdateDto,
  ): Promise<AccountEntity> {
    throw new Error('Method not implemented.');
  }
}
