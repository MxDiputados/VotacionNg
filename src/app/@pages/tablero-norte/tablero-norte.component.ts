import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../@core/services/api.service";
import {
  Totales,
  TiempoRestante,
} from "../../@core/interfaces/tablero.interface";

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
