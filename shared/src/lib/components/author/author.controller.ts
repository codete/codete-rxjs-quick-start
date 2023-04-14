import { Firedev } from 'firedev';
import { Author } from './author';
import { IAuthor } from './author.models';

@Firedev.Controller({
  className: 'AuthorController',
  entity: Author
})
export class AuthorController extends Firedev.Base.Controller<any> {

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    return async () => {
      return 'Hello world';
    }
  }

  @Firedev.Http.GET('/api/authors', true) // @ts-ignore
  getAuhtors(): Firedev.Response<Author[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      const arr = await Firedev.getResponseValue(config, req, res) as Author[];
      return arr as any;
    }
    //#endregion
  }

  //#region @websql
  async initExampleDbData() {
    const repo = this.connection.getRepository(Author);

    const authors: IAuthor[] = [
      {
        id: 1000,
        name: 'Elon',
        books: [1_000_000, 1_000_001]
      },
      {
        id: 1001,
        name: 'Charles',
        books: [1_000_002]
      },
      {
        id: 1002,
        name: 'Donald',
        books: [1_000_003]
      },
    ];

    for (let index = 0; index < authors.length; index++) {
      const author = authors[index];
      await repo.save(Author.from(author))
    }

  }
  //#endregion

}
