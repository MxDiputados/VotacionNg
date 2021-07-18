import { ApiService } from "./../../@core/services/api.service";
import { Component, OnInit } from "@angular/core";
import { Character } from "src/app/@core/interfaces/character.interface";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  loading: boolean;
  character: Character[] = [];
  diputados: any[]=[];
  errors: any;
  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loading = true;
    this.api
      .getAllDiputados()
      .refetch()
      .then((result) => {
        // console.log({result});
        this.diputados = result.data && result.data.allDiputados;
        this.loading = result.loading;
        this.errors = result.errors;
      });
  }
}
