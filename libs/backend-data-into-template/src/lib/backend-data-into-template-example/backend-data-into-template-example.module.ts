import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendDataIntoTemplateExampleComponent } from './backend-data-into-template-example.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BackendDataIntoTemplateExampleComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  declarations: [BackendDataIntoTemplateExampleComponent],
})
export class BackendDataIntoTemplateExampleModule { }
