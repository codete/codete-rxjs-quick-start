import { Injectable } from '@nestjs/common';
import { Author, Book, Hamster, HamsterOwner, Message } from '@codete-rxjs/api-interfaces';

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


export const Hamsters: Hamster[] = [
  {
    id: 1000,
    name: 'Pluszka',
    weight: 90
  },
  {
    id: 1001,
    name: 'Misia',
    weight: 70
  },
  {
    id: 1002,
    name: 'Chrupka',
    weight: 90
  },
  {
    id: 1003,
    name: 'Łapczuch',
    weight: 60
  }
];

export const HamstersOwners: HamsterOwner[] = [
  {
    name: 'Megan',
    hamsters: [1002, 1003]
  },
  {
    name: 'Natalie',
    hamsters: [1000]
  },
  {
    name: 'Victoria',
    hamsters: [1001]
  }
]


@Injectable()
export class AppService {

  getAuhtors(): Author[] {
    return authors;
  }

  getBooks() {
    return books;
  }

  getHamsterNames() {
    return Hamsters.map((h) => h.name);
  }

  getHamsters() {
    return Hamsters;
  }

  getHamsterIds() {
    return Hamsters.map(({ id }) => id);
  }

  getHamstersOwners() {
    return HamstersOwners;
  }

  getData(): Message {
    return { message: 'Welcome to api!' };
  }

}
