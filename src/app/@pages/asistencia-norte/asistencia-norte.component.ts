import { Component, OnInit } from "@angular/core";
import {
  DiputadoVotacion,
  Totales,
  TiempoRestante,
} from "../../@core/interfaces/tablero.interface";
import { ApiService } from "../../@core/services/api.service";
interface Response {
  allDiputadosAsistencia: DiputadoVotacion[];
  allDiputadosAsistencia2: DiputadoVotacion[];
  allDiputadosAsistencia3: DiputadoVotacion[];
  allDiputadosAsistencias: DiputadoVotacion[];
  allDiputadosAsistencias2: DiputadoVotacion[];
  allDiputadosAsistencias3: DiputadoVotacion[];
  allDiputadosCount: Totales;
  allDiputadosCountSitio: Totales;
  allDiputadosCountDistancia: Totales;
  countTiempoRestanteAsistencia: TiempoRestante;
}
@Component({
  selector: "app-asistencia-norte",
  templateUrl: "./asistencia-norte.component.html",
  styleUrls: ["./asistencia-norte.component.scss"],
})
export class AsistenciaNorteComponent implements OnInit {
  title = "DiputadosVotaciones";
  allAsistencias: DiputadoVotacion[] = [];
  allAsistencias2: DiputadoVotacion[] = [];
  allAsistencias3: DiputadoVotacion[] = [];
  tiempoRestante: TiempoRestante;
  DiputadosCount: Totales;
  DiputadosCountSitio: Totales;
  DiputadosCountDistancia: Totales;
  tiemporestante: number;
  sub: any;
  error: any;
  loading = true;
  minutos: number;
  segundos: number;
  countsitio: number;
  countDistancia: number;
  count: number;
  votacionActiva: any;
  asistenciaActiva: any;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchAsistenciaActiva();
  }
  fetchAsistenciaActiva() {
    // console.log('Columna 1');
    this.apiService
      .getAsistenciaActiva()
      .refetch()
      .then((result) => {
        // console.log('allDiputadosVotacion EP1: ', result);
        setTimeout(() => this.fetchAsistenciaActiva(), 15000);
        if (result.data.getAsistenciaActiva) {
          this.asistenciaActiva =
            result.data && result.data.getAsistenciaActiva;
          this.allAsistencias = this.asistenciaActiva.Asistencias.slice(0, 83);
          this.allAsistencias2 = this.asistenciaActiva.Asistencias.slice(
            83,
            166
          );
          this.allAsistencias2 = this.asistenciaActiva.Asistencias.slice(
            166,
            251
          );
        }
        console.log({ asistencias: this.allAsistencias });
        // console.log({result});
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
  
}
