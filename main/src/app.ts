//#region @notForNpm
//#region imports
import { Firedev } from 'firedev';

import {
  host,
  Author, AuthorController,
  Book, BookController,
  Hamster, HamsterController,
  HamsterOwner, HamsterOwnerController,
  HamsterPost, HamsterPostController,
} from '@codete-rxjs-quick-start/shared';

//#region @browser
import { FiredevGithubForkMeCornerModule } from 'firedev-ui';
import { NgModule, NgZone, ViewEncapsulation } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { filter, map, Subject, takeUntil, share, tap } from "rxjs";
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgScrollbarModule } from 'ngx-scrollbar';

//#endregion
//#endregion

//#region @browser

//#region routes
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./app/start/start.module`)
      .then(m => m.StartModule),
  },
  {
    path: 'backend-data-into-template',
    loadChildren: () => import(`@codete-rxjs-quick-start/backend-data-into-template`)
      .then(m => m.BackendDataIntoTemplateModule),
  },
  {
    path: 'list-of-ids-to-full-models',
    loadChildren: () => import('@codete-rxjs-quick-start/list-of-ids-to-full-models')
      .then(m => m.ListOfIdsToFullModelsModule),
  },
  {
    path: 'search-results-posts-interactions',
    loadChildren: () => import('@codete-rxjs-quick-start/search-results-posts-interactions')
      .then(m => m.SearchResultsPostsInteractionsModule),
  },
];
//#endregion

//#region main component
@Component({
  selector: 'app-main',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.scss'],
  templateUrl: './app.html',
})
export class MainComponent {
  constructor(
    private router: Router,
  ) {
  }

  gotoroot() {
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {

  }

}
//#endregion

//#region main module
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FiredevGithubForkMeCornerModule,
    NgScrollbarModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
      enableTracing: false,
    }),
  ],
  exports: [MainComponent],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule { }
//#endregion
//#endregion

//#region firedev start function
async function start() {
  // Firedev.enableProductionMode();

  const context = await Firedev.init({
    host,
    controllers: [
      AuthorController,
      BookController,
      HamsterController,
      HamsterOwnerController,
      HamsterPostController,
      // PUT FIREDEV CONTORLLERS HERE
    ],
    entities: [
      Author,
      Book,
      Hamster,
      HamsterOwner,
      HamsterPost,
      // PUT FIREDEV ENTITIES HERE
    ],
    //#region @websql
    config: {
      type: 'better-sqlite3',
      database: 'tmp-db.sqlite',
      logging: false,
    }
    //#endregion
  });
}
//#endregion

export default start;
//#endregion
