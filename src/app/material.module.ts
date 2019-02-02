import { NgModule } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [ MatInputModule, MatFormFieldModule ],
  exports: [ MatInputModule, MatFormFieldModule ],
})
export class MaterialModule { }