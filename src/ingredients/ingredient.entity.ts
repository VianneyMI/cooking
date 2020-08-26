import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('ingredient')
export class IngredientEntity {
	@PrimaryGeneratedColumn('uuid') id: string

    @Column('varchar', { length: 500, unique: true})
    name: string

    @Column('varchar', { length: 500 })
    aisle: string
}