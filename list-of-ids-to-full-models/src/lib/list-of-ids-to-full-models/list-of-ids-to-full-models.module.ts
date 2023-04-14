//#region @browser
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfIdsToFullModelsComponent } from './list-of-ids-to-full-models.component';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@codete-rxjs-quick-start/shared';
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
    MaterialModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ListOfIdsToFullModelsComponent]
})
export class ListOfIdsToFullModelsModule { }
//#endregion
