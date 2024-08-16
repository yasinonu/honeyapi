import { Body, Controller, Get, Post, UseGuards, Request } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./interfaces/user.interface";
import { AuthGuard } from "../auth/auth.guard";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getBees(): User[] {
    return this.userService.getUsers();
  }

  @UseGuards(AuthGuard)
  @Get('me')
  getProfile(@Request() req): User {
    return req.user;
  }

  // @Post()
  // async create(@Body() createBeeDto: CreateBeeDto) {
  //   this.beeService.create(createBeeDto);
  // }
}
