import { Controller, Get, Request, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./schemas/user.schema";
import { AuthGuard } from "../auth/auth.guard";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Request() req): User {
    return req.user;
  }
}
