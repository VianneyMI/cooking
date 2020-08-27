import { Controller, Param, HttpStatus, Res, BadRequestException, NotFoundException, ConflictException } from '@nestjs/common';
import { Crud, Override, ParsedRequest, CrudRequest, ParsedBody, CrudController } from '@nestjsx/crud'
import { IngredientEntity } from './ingredient.entity';
import { IngredientsService } from './ingredients.service';
import { RecipeEntity } from 'src/recipes/recipe.entity';
import { RecipesService } from 'src/recipes/recipes.service';


@Crud({
    model: {
        type: IngredientEntity
    },
    params: {
        id: {
            field: 'id',
            type: 'string',
            primary: true
        }
    }
})
@Controller('ingredients')
export class IngredientsController {
    constructor(public service: IngredientsService, public recipesService: RecipesService) { }

    get base(): CrudController<IngredientEntity> {
        return this;
    }

    @Override()
    async deleteOne(
        @ParsedRequest() req: CrudRequest,
        @ParsedBody() dto: IngredientEntity,
        @Param('id') id: string
    ) {
        const ingredient = await this.service.findOne({
            where: {
                id
            }
        })

        if(!ingredient) {
            throw new NotFoundException('Ingredient not found');
        }

        const recipes = await this.recipesService.find();
        for(const recipe of recipes) {
            if(Array.of(...recipe.ingredients).some((ingredientName) => ingredientName === ingredient.name)) {
                throw new ConflictException("Cannot delete ingredient used in a recipe");
            }
        }

        this.base.deleteOneBase(req);
    }
}
