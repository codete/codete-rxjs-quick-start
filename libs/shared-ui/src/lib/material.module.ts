import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatExpansionModule } from "@angular/material/expansion";

export const materialModules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTabsModule,
  MatExpansionModule,
];

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class MaterialModule { }
