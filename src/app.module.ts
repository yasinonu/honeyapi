import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BeesController } from './bees/bees.controller';
import { AppService } from './app.service';
import { BeeService } from './bees/bee.service';

@Module({
  imports: [],
  controllers: [AppController, BeesController],
  providers: [AppService, BeeService],
})
export class AppModule {}
