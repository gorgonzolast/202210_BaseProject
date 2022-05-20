import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillaListComponent } from './maravilla-list/maravilla-list.component';
import { MaravillaService } from './maravilla.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MaravillaListComponent],
  exports: [MaravillaListComponent],
  providers: [MaravillaService]
})
export class MaravillaModule { }
