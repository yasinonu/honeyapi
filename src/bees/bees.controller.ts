import { Body, Controller, Get, Post } from "@nestjs/common";
import { BeeService } from './bee.service';
import { Bee } from "./interfaces/bee.interface";

@Controller('bees')
export class BeesController {
  constructor(private readonly beeService: BeeService) {}

  @Get()
  getBees(): Bee[] {
    return this.beeService.getBees();
  }

  @Post()
  async create(@Body() createBeeDto: CreateBeeDto) {
    this.beeService.create(createBeeDto);
  }
}
