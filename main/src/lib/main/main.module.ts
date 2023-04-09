import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiModule } from '@codete-rxjs/shared-ui';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedUiModule,
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
