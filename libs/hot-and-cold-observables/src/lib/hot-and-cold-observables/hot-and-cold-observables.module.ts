import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotAndColdObservablesComponent } from './hot-and-cold-observables.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: HotAndColdObservablesComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HotAndColdObservablesComponent]
})
export class HotAndColdObservablesModule { }
