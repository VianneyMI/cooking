import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { IngredientEntity } from './ingredient.entity';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';

@Module({
    imports: [TypeOrmModule.forFeature([IngredientEntity])],
    controllers: [IngredientsController],
    providers: [IngredientsService]
})
export class IngredientsModule {}
