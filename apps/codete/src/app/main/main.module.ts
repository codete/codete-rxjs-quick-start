import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';

import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HttpClientModule } from '@angular/common/http';


const materialModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
];

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
    ...materialModules,
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
