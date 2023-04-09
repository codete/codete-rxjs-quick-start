import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfIdsToFullModelsComponent } from './list-of-ids-to-full-models.component';

import { HttpClientModule } from '@angular/common/http';
import { SharedUiModule } from '@codete-rxjs/shared-ui';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListOfIdsToFullModelsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    SharedUiModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListOfIdsToFullModelsComponent]
})
export class ListOfIdsToFullModelsModule { }
