import { Controller, Get, Param } from '@nestjs/common';

import { Author, Message } from '@codete-rxjs/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getData() {
    return this.appService.getData();
  }

  @Get('authors')
  getAuhtors() {
    return this.appService.getAuhtors();
  }

  @Get('books')
  getBooks() {
    return this.appService.getBooks();
  }

  @Get('hamsters/names')
  getHamstersNames() {
    return this.appService.getHamsterNames();
  }

  @Get('hamsters/ids')
  getHamsterIds() {
    return this.appService.getHamsterIds();
  }

  @Get('hamster/:id')
  getHamsterById(@Param() params: { id: number; }) {
    return this.appService.getHamsters().find(h => h.id === Number(params.id))
  }

  @Get('hamsters')
  getHamsters() {
    return this.appService.getHamsters();
  }

  @Get('hamsters/owners')
  getHamstersOwners() {
    return this.appService.getHamstersOwners();
  }


}
