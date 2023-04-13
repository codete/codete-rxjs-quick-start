import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./main/main.module`)
      .then(m => m.MainModule),
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

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,
    }),
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
