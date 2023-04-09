//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-list-of-ids-to-full-models',
      template: 'hello from list-of-ids-to-full-models'
    })
    export class ListOfIdsToFullModelsComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [ListOfIdsToFullModelsComponent],
      declarations: [ListOfIdsToFullModelsComponent],
      providers: [],
    })
    export class ListOfIdsToFullModelsModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion