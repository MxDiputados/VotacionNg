import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../@core/services/api.service';
import { Totales } from '../../@core/interfaces/tablero.interface';

@Component({
  selector: 'app-votacion-sur',
  templateUrl: './votacion-sur.component.html',
  styleUrls: ['./votacion-sur.component.scss']
})
export class VotacionSurComponent implements OnInit {
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
  constructor(private apiService: ApiService) { }
  
  ngOnInit(): void {this.fetchVotacionaActiva();
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
          this.votaciones1 = this.votacionActiva.Votos.slice(251, 334);
          this.votaciones2 = this.votacionActiva.Votos.slice(334, 417);
          this.votaciones3 = this.votacionActiva.Votos.slice(417, 511);
        }
        console.log({votaciones: this.votaciones1 });
        this.loading = result.loading;
        this.error = result.errors;
      });
  }
}
