import { Component, OnInit } from '@angular/core';
import { DiputadoVotacion, TiempoRestante, Totales } from '../../@core/interfaces/tablero.interface';
import { ApiService } from '../../@core/services/api.service';

@Component({
  selector: 'app-asistencia-sur',
  templateUrl: './asistencia-sur.component.html',
  styleUrls: ['./asistencia-sur.component.scss']
})
export class AsistenciaSurComponent implements OnInit {
  title = "DiputadosVotaciones";
  allAsistencias: any[] = [];
  allAsistencias2: any[] = [];
  allAsistencias3: any[] = [];
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
  constructor(private apiService: ApiService) { }

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
          this.allAsistencias = this.asistenciaActiva.Asistencias.slice(251, 334);
          this.allAsistencias2 = this.asistenciaActiva.Asistencias.slice(
            334,
            417
          );
          this.allAsistencias3 = this.asistenciaActiva.Asistencias.slice(
            417,
            511
          );
        }
        console.log({ asistencias: this.allAsistencias });
        // console.log({result});
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
