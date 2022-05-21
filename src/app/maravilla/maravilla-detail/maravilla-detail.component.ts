
import { Component, Input, OnInit } from '@angular/core';
import { maravilla } from '../maravilla';

@Component({
  selector: 'app-maravilla-detail',
  templateUrl: './maravilla-detail.component.html',
  styleUrls: ['./maravilla-detail.component.css'],
})
export class MaravillaDetailComponent implements OnInit {
  @Input() selectedMaravilla!: maravilla;
  constructor() {}

  ngOnInit() {}
}
