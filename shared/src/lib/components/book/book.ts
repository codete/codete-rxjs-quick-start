import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
import type { BookController } from './book.controller';

@Firedev.Entity({
  className: 'Book'
})
export class Book extends Firedev.Base.Entity<any> {
  static ctrl: BookController;
  static from(obj: Omit<Partial<Book>, 'ctrl'>) {
    return _.merge(new Book(), obj)
  }

  static getAll() {
    return this.ctrl.getAll();
  }
  ctrl: BookController;


  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'integer', primary: true})
  //#endregion
  id: number;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'varchar', length: '100' })
  //#endregion
  title: string;

   //#region @websql
   @Firedev.Orm.Column.Custom({ type: 'integer' })
   //#endregion
  soldCopies?: number;


}
