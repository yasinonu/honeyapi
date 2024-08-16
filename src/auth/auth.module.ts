import { Module } from '@nestjs/common';
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { jwtConstants } from "./constants";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}