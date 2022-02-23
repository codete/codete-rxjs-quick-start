import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleEventsComponent } from './multiple-events.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedUiModule } from '@codete-rxjs/shared-ui';

const routes: Routes = [
  {
    path: '',
    component: MultipleEventsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedUiModule,
  ],
  declarations: [MultipleEventsComponent]
})
export class MultipleEventsModule { }
