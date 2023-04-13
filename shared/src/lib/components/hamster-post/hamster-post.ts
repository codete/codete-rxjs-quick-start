import { Firedev } from 'firedev';
import { _ } from 'tnp-core';
import { Hamster } from '../hamster/hamster';
import type { HamsterPostController } from './hamster-post.controller';

@Firedev.Entity({
  className: 'HamsterPost'
})
export class HamsterPost extends Hamster {
  static ctrl: HamsterPostController;
  static from(obj: Omit<Partial<HamsterPost>, 'ctrl'>) {
    return _.merge(new HamsterPost(), obj)
  }

  static getAll() {
    return this.ctrl.getAll();
  }

  // @ts-ignore
  ctrl: HamsterPostController;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'integer' })
  //#endregion
  loveLevel: number;

  //#region @websql
  @Firedev.Orm.Column.Custom({ type: 'boolean', default: false })
  //#endregion
  isLoading?: boolean;

}
