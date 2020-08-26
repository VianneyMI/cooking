import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { RecipesService } from './recipes.service';
import { RecipeEntity } from './recipe.entity';
@Crud({
	model: {
		type: RecipeEntity
	},
	params: {
		id: {
			field: 'id',
			type: 'string',
			primary: true
		}
	}
})
@Controller('recipes')
export class RecipesController {
    constructor (public service : RecipesService){}
}
