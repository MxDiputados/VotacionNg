import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../@core/services/api.service";
import { Totales } from '../../@core/interfaces/tablero.interface';

@Component({
  selector: "app-votacion-norte",
  templateUrl: "./votacion-norte.component.html",
  styleUrls: ["./votacion-norte.component.scss"],
})
export class VotacionNorteComponent implements OnInit {
  votacionActiva: any;
  loading: any;
  error: any;
  votaciones1: any;
  votaciones2: any;
  votaciones3: any;
  votosAFavor: Totales;
  votosEnContra: Totales;
  votosAbstencion: Totales;
  presentes: Totales;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchVotacionaActiva();
  }
  fetchVotacionaActiva() {
    this.apiService
      .getVotacionActiva()
      .refetch()
      .then((result) => {
        // console.log('allDiputadosVotacion EP1: ', result);
        setTimeout(() => this.fetchVotacionaActiva(), 15000);
        if (result.data.getVotacionActiva) {
          this.votacionActiva =
            result.data && result.data.getVotacionActiva;
          this.votaciones1 = this.votacionActiva.Votos.slice(0, 83);
          this.votaciones2 = this.votacionActiva.Votos.slice(83, 166);
          this.votaciones3 = this.votacionActiva.Votos.slice(166, 253);
        }
        console.log({votaciones: this.votaciones1 });
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
