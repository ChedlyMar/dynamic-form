import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

const materials = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule
  
];

@NgModule({
  imports: [ materials ],
  exports: [ materials ]
})
export class AppMaterialModule { }
