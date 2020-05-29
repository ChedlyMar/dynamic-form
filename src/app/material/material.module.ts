import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


const materials = [
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule
  
];

@NgModule({
  imports: [ materials ],
  exports: [ materials ]
})
export class AppMaterialModule { }
