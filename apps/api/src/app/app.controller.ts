import { Controller, Get } from '@nestjs/common';

import { Author, Message } from '@codete-rxjs/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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


}
