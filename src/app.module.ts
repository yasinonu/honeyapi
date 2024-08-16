import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BeesController } from './bees/bee.controller';
import { AppService } from './app.service';
import { BeeService } from './bees/bee.service';
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [AppController, BeesController],
  providers: [AppService, BeeService],
})
export class AppModule {}
