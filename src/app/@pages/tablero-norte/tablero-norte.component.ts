import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-tablero-norte",
  templateUrl: "./tablero-norte.component.html",
  styleUrls: ["./tablero-norte.component.scss"],
})
export class TableroNorteComponent implements OnInit {
  votacion: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
