import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({
      name: createUserDto.name,
      honey: 0,
      password: createUserDto.password,
      _id: "123"
    });
    return newUser.save();
  }

  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findByName(name: string): Promise<User> {
    return this.userModel.findOne({name: name}).exec();
  }

  async findById(id: string): Promise<User> {
    return this.userModel.findOne({_id: id}).exec();
  }
}
