import { Firedev } from 'firedev';
import { HamsterOwner } from './hamster-owner';
import { IHamsterOwner } from './hamster-owner.models';

@Firedev.Controller({
  className: 'HamsterOwnerController',
  entity: HamsterOwner
})
export class HamsterOwnerController extends Firedev.Base.Controller<any> {

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    return async () => {
      return 'Hello world';
    }
  }

  @Firedev.Http.GET(`/api/hamsters/owners`, true) // @ts-ignore
  getHamstersOwners(): Firedev.Response<HamsterOwner[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      let arr = await Firedev.getResponseValue(config, req, res) as HamsterOwner[];
      return arr as any;
    }
    //#endregion
  }


  //#region @websql
  async initExampleDbData() {
    const repo = this.connection.getRepository(HamsterOwner);

    const hamstersOwners: IHamsterOwner[] = [
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
    ];

    for (let index = 0; index < hamstersOwners.length; index++) {
      const book = hamstersOwners[index];
      await repo.save(HamsterOwner.from(book))
    }

  }
  //#endregion

}
