import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryServiceTag } from '@domain';

@Module({
  controllers: [CategoryController],
  providers: [{ provide: CategoryServiceTag, useClass: CategoryService }],
  exports: [CategoryServiceTag],
})
export class CategoryModule {}
