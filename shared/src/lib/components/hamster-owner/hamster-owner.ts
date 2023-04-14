import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
import type { Hamster } from '../hamster/hamster';
import type { HamsterOwnerController } from './hamster-owner.controller';

@Firedev.Entity({
  className: 'HamsterOwner'
})
export class HamsterOwner extends Firedev.Base.Entity<any> {
  static ctrl: HamsterOwnerController;
  static from(obj: Omit<Partial<HamsterOwner>, 'ctrl'>) {
    return _.merge(new HamsterOwner(), obj)
  }

  static getAll() {
    return this.ctrl.getAll();
  }
  ctrl: HamsterOwnerController;


  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'integer', primary: true})
  //#endregion
  id: number;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'varchar', length: '100' })
  //#endregion
  name: string;

  hamsters: (number | Hamster)[];

}
