import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  honey: number;

  @Prop()
  password: string;

  @Prop()
  _id: string;
}

export const UserSchema = SchemaFactory.createForClass(User);