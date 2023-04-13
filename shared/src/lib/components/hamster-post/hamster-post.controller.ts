import { Firedev } from 'firedev';
import { HamsterPost } from './hamster-post';

@Firedev.Controller({
  className: 'HamsterPostController',
  entity: HamsterPost
})
export class HamsterPostController extends Firedev.Base.Controller<any> {

  @Firedev.Http.GET()
  hello(): Firedev.Response<string> {
    return async () => {
      return 'Hello world';
    }
  }

  @Firedev.Http.GET(`/${Firedev.symbols.CRUD_TABLE_MODELS}`) // @ts-ignore
  getAll(@Firedev.Http.Param.Query('limit') limit = Infinity): Firedev.Response<HamsterPost[]> {
    //#region @websqlFunc
    const config = super.getAll();
    return async (req, res) => { // @ts-ignore
      let arr = await Firedev.getResponseValue(config, req, res) as HamsterPost[];
      if (arr.length > limit) {
        arr = arr.slice(0, limit - 1);
      }
      return arr as any;
    }
    //#endregion
  }

  //#region @websql
  async initExampleDbData() {
    // const repo = this.connection.getRepository(HamsterPost);
    // await repo.save(new HamsterPost())
    // const all = await repo.find()
  }
  //#endregion

}