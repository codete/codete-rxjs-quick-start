import { Firedev } from 'firedev';
import { Hamster } from './hamster';
import { IHamster } from './hamster.models';

@Firedev.Controller({
  className: 'HamsterController',
  entity: Hamster
})
export class HamsterController extends Firedev.Base.Controller<any> {

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    return async () => {
      return 'Hello world';
    }
  }

  @Firedev.Http.GET(`/api/hamsters`, true) // @ts-ignore
  getHamsters(@Firedev.Http.Param.Query('limit') limit = Infinity): Firedev.Response<Hamster[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      let arr = await Firedev.getResponseValue(config, req, res) as Hamster[];
      if (arr.length > limit) {
        arr = arr.slice(0, limit - 1);
      }
      return arr as any;
    }
    //#endregion
  }

  @Firedev.Http.GET('/api/hamsters/names', true) // @ts-ignore
  getHamsterNames(): Firedev.Response<string[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      const arr = await Firedev.getResponseValue(config, req, res) as Hamster[];
      return arr.map((h) => h.name);
    }
    //#endregion
  }

  @Firedev.Http.GET('hamsters/ids', true) // @ts-ignore
  getHamsterNames(): Firedev.Response<number[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      const arr = await Firedev.getResponseValue(config, req, res) as Hamster[];
      return arr.map((h) => h.id);
    }
    //#endregion
  }

  @Firedev.Http.GET('/api/hamster/:id', true) // @ts-ignore
  getHamsterNames(@Firedev.Http.Param.Path('id') id = 0): Firedev.Response<Hamster> {
    //#region @websqlFunc
    const config = super.getBy(id);
    return async (req, res) => { // @ts-ignore
      return await Firedev.getResponseValue(config, req, res) as Hamster;
    }
    //#endregion
  }

  @Firedev.Http.GET('/api/hamsterByName/:name', true) // @ts-ignore
  getHamsterNames(@Firedev.Http.Param.Path('name') name = ''): Firedev.Response<string> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      const arr = await Firedev.getResponseValue(config, req, res) as Hamster[];
      return arr.find((h) => h.name === name)?.name;
    }
    //#endregion
  }




  // getHamsterIds() {
  //   return Hamsters.map(({ id }) => id);
  // }

  // getHamstersOwners() {
  //   return HamstersOwners;
  // }

  //#region @websql
  async initExampleDbData() {
    const repo = this.connection.getRepository(Hamster);
    const hamsters: IHamster[] = [
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

    for (let index = 0; index < hamsters.length; index++) {
      const book = hamsters[index];
      await repo.save(Hamster.from(book))
    }

  }
  //#endregion

}
