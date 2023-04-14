import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
import { Book } from '../book/book';
import type { AuthorController } from './author.controller';

@Firedev.Entity({
  className: 'Author'
})
export class Author extends Firedev.Base.Entity<any> {
  static ctrl: AuthorController;
  static from(obj: Omit<Partial<Author>, 'ctrl'>) {
    return _.merge(new Author(), obj)
  }

  static getAll() {
    return this.ctrl.getAll();
  }
  ctrl: AuthorController;


  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'integer', primary: true })
  //#endregion
  id: number;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'varchar', length: '100' })
  //#endregion
  name: string;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'simple-json', nullable: true })
  //#endregion
  books: (Book | number)[];
}
