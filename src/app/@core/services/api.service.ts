import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import {
  listaPersonajes,
  queryAsistenciaActiva,
  queryVotacionActiva,
  queryAllDiputados,
} from "../operations/query";
import { map } from "rxjs/operators";
import { changeVotes } from "../operations/subscription";
import { addVoteOperation } from "../operations/mutation";
@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private apollo: Apollo) {}

  // Lista de los personajes de Breaking Bad
  getCharacters(skip: boolean = true) {
    return this.apollo
      .watchQuery({
        query: listaPersonajes,
        variables: {
          skip,
        },
        fetchPolicy: "network-only",
      })
      .valueChanges.pipe(
        map((result: any) => {
          console.log(result.data);
          return result.data.characters;
        })
      );
  }

  // Obtener los cambios en tiempo real de los votos
  changeVotesListener() {
    return this.apollo.subscribe({
      query: changeVotes,
    });
  }

  // Añadir un nuevo voto
  addVote(character: string) {
    return this.apollo.mutate({
      mutation: addVoteOperation,
      variables: {
        character,
      },
    });
  }
  getAsistenciaActiva(): any {
    return this.apollo.watchQuery<any>({
      query: queryAsistenciaActiva,
    });
  }
  getVotacionActiva(): any {
    return this.apollo.watchQuery<any>({
      query: queryVotacionActiva,
    });
  }
  getAllDiputados(): any {
    return this.apollo.watchQuery<any>({
      query: queryAllDiputados,
    });
  }
  public chunkArray(arr: Array<any>, n: number): Array<Array<any>> {
    return arr
      .slice(0, (arr.length + n - 1) / n || 0)
      .map((c, i) => arr.slice(n * i, n * i + n));
  }
}
