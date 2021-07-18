import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero-sur',
  templateUrl: './tablero-sur.component.html',
  styleUrls: ['./tablero-sur.component.scss']
})
export class TableroSurComponent implements OnInit {
votacion:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
