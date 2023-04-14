import { Firedev } from 'firedev';
import { Helpers } from 'tnp-core';
import { Book } from './book';
import { IBook } from './book.models';

@Firedev.Controller({
  className: 'BookController',
  entity: Book
})
export class BookController extends Firedev.Base.Controller<any> {

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    return async () => {
      return 'Hello world';
    }
  }

  @Firedev.Http.GET('/api/books', true) // @ts-ignore
  getBooks(): Firedev.Response<Book[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      const arr = await Firedev.getResponseValue(config, req, res) as Book[];
      return arr as any;
    }
    //#endregion
  }

  //#region @websql
  async initExampleDbData() {
    const repo = this.connection.getRepository(Book);

    const books: IBook[] = [
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

    for (let index = 0; index < books.length; index++) {
      const book = books[index];
      await repo.save(Book.from(book))
    }

  }
  //#endregion

}
