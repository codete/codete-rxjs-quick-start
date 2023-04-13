import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
import type { HamsterController } from './hamster.controller';
import { Grams } from './hamster.models';

@Firedev.Entity({
  className: 'Hamster'
})
export class Hamster extends Firedev.Base.Entity<any> {
  static ctrl: HamsterController;
  static from(obj: Omit<Partial<Hamster>, 'ctrl'>) {
    return _.merge(new Hamster(), obj)
  }

  static getAll() {
    return this.ctrl.getAll();
  }
  ctrl: HamsterController;


  //#region @websql
  @Firedev.Orm.Column.Generated()
  //#endregion
  id: number;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'varchar', length: '100' })
  //#endregion
  name: string;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'integer' })
  //#endregion
  weight: Grams;

}
