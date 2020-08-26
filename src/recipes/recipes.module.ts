import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipeEntity} from './recipe.entity';


@Module({
  imports:[TypeOrmModule.forFeature([RecipeEntity])],
  providers: [RecipesService],
  controllers: [RecipesController]
})
export class RecipesModule {}
