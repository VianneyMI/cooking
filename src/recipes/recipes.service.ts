import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { RecipeEntity } from './recipe.entity';

@Injectable()
export class RecipesService extends TypeOrmCrudService<RecipeEntity> {
	constructor (@InjectRepository(RecipeEntity) repo) {
		super(repo)
	}
}