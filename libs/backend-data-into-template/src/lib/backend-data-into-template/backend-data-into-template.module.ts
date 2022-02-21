import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendDataIntoTemplateComponent } from './backend-data-into-template.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedUiModule } from '@codete-rxjs/shared-ui';


const routes: Routes = [
  {
    path: '',
    component: BackendDataIntoTemplateComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedUiModule,
  ],
  declarations: [BackendDataIntoTemplateComponent]
})
export class BackendDataIntoTemplateModule { }
