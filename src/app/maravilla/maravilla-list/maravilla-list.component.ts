import { Component, Input, OnInit } from '@angular/core';
import { maravilla } from '../maravilla';
import { MaravillaService } from '../maravilla.service';

@Component({
  selector: 'app-maravilla-list',
  templateUrl: './maravilla-list.component.html',
})
export class MaravillaListComponent implements OnInit {

  Maravillas: maravilla[] = [];

  selectedMaravilla!: maravilla;
  activate: Boolean = false;
  onSelected(maravilla: maravilla): void {
    this.activate = true;
    this.selectedMaravilla = maravilla;
  }
  constructor(private maravillaService: MaravillaService) { }


  getMaravillas(): void {
    this.maravillaService.getMaravillas().subscribe(maravillas => this.funcion(maravillas));
  }

  funcion(maravillas: maravilla[]) {
    maravillas.sort((a, b) => (a.country > b.country) ? 1 : -1)
    var index: number = 1;
    for (var val of maravillas) {
      val.id = index;
      index++;
    }
    this.Maravillas = maravillas;
  }

  ngOnInit() {
    this.getMaravillas();
  }

}
