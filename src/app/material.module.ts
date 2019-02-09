import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [ MatInputModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatCardModule ],
  exports: [ MatInputModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatCardModule ],
})
export class MaterialModule { }