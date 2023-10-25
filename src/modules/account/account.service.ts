import {
  AccountDto,
  AccountEntity,
  AccountUpdateDto,
  IAccountService,
} from '@domain';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService implements IAccountService {
  @InjectRepository(AccountEntity)
  private readonly repository: Repository<AccountEntity>;

  public async create(dto: AccountDto): Promise<AccountEntity> {
    const accoutEntity = this.repository.create({ ...dto });
    return await this.repository.save(accoutEntity);
  }
  public async delete(id: string): Promise<AccountEntity> {
    const bankForDelete = await this.getOne(id);

    if (!bankForDelete)
      throw new NotFoundException(`Bank with id: ${id} does not exist`);

    return await this.repository.remove(bankForDelete);
  }
  public async getOne(id: string): Promise<AccountEntity> {
    const account = await this.repository.findOneBy({ id });
    if (!account)
      throw new NotFoundException(`Account with id: ${id} does not exist`);
    return account;
  }
  public async getAll(): Promise<AccountEntity[]> {
    return await this.repository.find();
  }
  public async update(
    id: string,
    dto: AccountUpdateDto,
  ): Promise<AccountEntity> {
    await this.repository.update({ id }, { ...dto });
    return await this.getOne(id);
  }
}
