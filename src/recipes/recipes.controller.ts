import { Controller, Param, NotFoundException } from '@nestjs/common';
import { Crud, Override, ParsedRequest, ParsedBody, CrudRequest, CrudController } from '@nestjsx/crud';
import { RecipesService } from './recipes.service';
import { RecipeEntity, RecipeType } from './recipe.entity';
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
export class RecipesController implements CrudController<RecipeEntity> {

	constructor(public service: RecipesService) { }

	get base(): CrudController<RecipeEntity> {
		return this;
	}

	@Override()
	async updateOne(
		@ParsedRequest() req: CrudRequest,
		@ParsedBody() dto: RecipeEntity,
		@Param('id') id: string
	) {

		const currentRecipe = await this.service.findOne({
			where: {
				id
			}
		});

		if(!currentRecipe) {
			throw new NotFoundException('Recipe not found');
		}

		if (dto.name) {
			if (dto.name !== currentRecipe.name) {
				console.log("BAZINGA")
			}
		}

		return this.base.updateOneBase(req, dto);
	}
}
