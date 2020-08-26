import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud'
import { IngredientEntity } from './ingredient.entity';
import { IngredientsService } from './ingredients.service';


@Crud({
    model:{
        type:IngredientEntity
    },
    params:{
        id:{
            field:'id',
            type: 'number',
            primary:true
        }
    }
})
@Controller('ingredients')
export class IngredientsController {
    constructor (public service: IngredientsService){}
}
