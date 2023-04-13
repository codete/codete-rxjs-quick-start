import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '@codete-rxjs-quick-start/shared';

const routes: Routes = [
  {
    path: '',
    component: StartComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [StartComponent],
  exports: [StartComponent]
})
export class StartModule { }
