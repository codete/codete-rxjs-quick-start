//#region @notForNpm

//#region @browser
    import { NgModule } from '@angular/core';
    import { Component, OnInit } from '@angular/core';


    @Component({
      selector: 'app-backend-data-into-template',
      template: 'hello from backend-data-into-template'
    })
    export class BackendDataIntoTemplateComponent implements OnInit {
      constructor() { }

      ngOnInit() { }
    }

    @NgModule({
      imports: [],
      exports: [BackendDataIntoTemplateComponent],
      declarations: [BackendDataIntoTemplateComponent],
      providers: [],
    })
    export class BackendDataIntoTemplateModule { }
    //#endregion

    //#region @backend
    async function start(port: number) {
      console.log('hello world from backend');
    }

    export default start;

//#endregion

//#endregion