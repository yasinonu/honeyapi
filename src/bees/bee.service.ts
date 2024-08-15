import { Injectable } from '@nestjs/common';
import { Bee } from "./interfaces/bee.interface";

@Injectable()
export class BeeService {
  private readonly bees: Bee[] = [];
  getBees(): Bee[] {
    return this.bees;
  }
  create(bee: Bee) {
    this.bees.push(bee);
  }
}
