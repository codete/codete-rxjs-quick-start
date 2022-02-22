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
    loadChildren: () => import(`@codete-rxjs/backend-data-into-template`)
      .then(m => m.BackendDataIntoTemplateModule),
  },
  {
    path: 'hot-and-cold-observables',
    loadChildren: () => import(`@codete-rxjs/hot-and-cold-observables`)
      .then(m => m.HotAndColdObservablesModule),
  }
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
