import { Injectable } from '@nestjs/common';
import { User } from "./interfaces/user.interface";

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      name: "maria",
      bees: [],
      honey: 10,
      password: "567",
      user_id: "1"
    }
  ];
  getUsers(): User[] {
    return this.users;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.name === username);
  }
  create(user: User) {
    this.users.push(user);
  }
}
