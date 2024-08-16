import { Bee } from "../../bees/interfaces/bee.interface";

export interface User {
  name: string;
  bees: Bee[]
  honey: number;

  password: string;

  user_id: string;
}
