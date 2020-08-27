import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

export enum RecipeType {
    Breakfast = "breakfast",
    Lunch = "lunch",
    Dinner = "dinner"
}

@Entity('recipe')
export class RecipeEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500, unique: true})
    name: string

    @Column('varchar', { length: 500 })
    type: RecipeType

    @Column('varchar', { length: 500 })
    ingredients: string

    @Column('varchar', { length: 500 })
    instructions: string
}