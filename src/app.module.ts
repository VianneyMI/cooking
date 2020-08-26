import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule} from '@nestjs/typeorm';
import { IngredientsModule } from './ingredients/ingredients.module';


@Module({
  imports: [TypeOrmModule.forRoot(), IngredientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
