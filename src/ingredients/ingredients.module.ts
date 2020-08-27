import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { IngredientEntity } from './ingredient.entity';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { RecipesService } from 'src/recipes/recipes.service';
import { RecipeEntity } from 'src/recipes/recipe.entity';

@Module({
    imports: [TypeOrmModule.forFeature([IngredientEntity, RecipeEntity])],
    controllers: [IngredientsController],
    providers: [IngredientsService, RecipesService]
})
export class IngredientsModule {}
