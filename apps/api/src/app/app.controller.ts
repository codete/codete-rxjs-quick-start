import { Controller, Get, Param } from '@nestjs/common';
import { Author, Message } from '@codete-rxjs/api-interfaces';
import { AppService } from './app.service';
import * as fuzzy from 'fuzzy';

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

  @Get('hamsterByName/:name')
  HamsterByName(@Param() params: { name: string; }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const name = (params?.name || '').replace(':', '')
        // console.log(`name: '${name}'`)
        if (name) {
          const hamsters = this.appService.getHamsters();
          const results = fuzzy.filter(name, hamsters.map(h => h.name));
          // const results = this.appService.getHamsters().filter(h => h.name.search(name) !== -1);
          // console.log(hammers)
          resolve(results.map(hamyName => hamsters.find(h => h.name === hamyName.string)));
        } else {
          resolve([]);
        }
      }, 1000)
    })
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
