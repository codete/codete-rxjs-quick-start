import { Injectable } from '@nestjs/common';
import { Author, Book, Message } from '@codete-rxjs/api-interfaces';

const books: Book[] = [
  {
    id: 1_000_000,
    title: 'Frontend Security Best Practises',
    soldCopies: 100
  },

  {
    id: 1_000_001,
    title: 'Angular NgRx Applications',
    soldCopies: 55
  },

  {
    id: 1_000_002,
    title: 'Advanced Rxjs',
    soldCopies: 234
  },
  {
    id: 1_000_003,
    title: 'Angular For Dummies',
    soldCopies: 344
  },
];

const authors: Author[] = [
  {
    id: 1000,
    name: 'Elon',
    books: [1_000_000, 1_000_001]
  },
  {
    id: 1000,
    name: 'Charles',
    books: [1_000_002]
  },
  {
    id: 1000,
    name: 'Donald',
    books: [1_000_003]
  },
];

export const HamsersNamesArr: string[] = [
  'Pluszka',
  'Łapczuch',
  'Chrupka',
  'Misia',
];


@Injectable()
export class AppService {

  getAuhtors(): Author[] {
    return authors;
  }

  getBooks() {
    return books;
  }

  getHamsterNames() {
    return HamsersNamesArr;
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

}
