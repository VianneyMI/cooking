import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { IngredientEntity } from './ingredient.entity';

@Injectable()
export class IngredientsService extends TypeOrmCrudService<IngredientEntity> {
	constructor (@InjectRepository(IngredientEntity) repo) {
		super(repo)
	}
}