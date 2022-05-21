import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaravillaListComponent } from './maravilla-list/maravilla-list.component';
import { MaravillaDetailComponent } from './maravilla-detail/maravilla-detail.component';
import { MaravillaService } from './maravilla.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MaravillaListComponent,  MaravillaDetailComponent],
  exports: [MaravillaListComponent, MaravillaDetailComponent],
  providers: [MaravillaService]
})
export class MaravillaModule { }
