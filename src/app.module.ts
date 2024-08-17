import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BeesController } from './bees/bee.controller';
import { AppService } from './app.service';
import { BeeService } from './bees/bee.service';
import { AuthModule } from "./auth/auth.module";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AuthModule,
    MongooseModule.forRoot('mongodb+srv://lampeh:4afdMauDvMapD3iP@cluster0.hkkuk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  ],
  controllers: [AppController, BeesController],
  providers: [AppService, BeeService],
})
export class AppModule {}
