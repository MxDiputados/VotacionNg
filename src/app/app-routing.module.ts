import { VotesComponent } from "./@pages/votes/votes.component";
import { CharactersComponent } from "./@pages/characters/characters.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableroNorteComponent } from "./@pages/tablero-norte/tablero-norte.component";
import { SwitchComponent } from "./@pages/switch/switch.component";
import { VotacionSurComponent } from "./@pages/votacion-sur/votacion-sur.component";
import { AsistenciaSurComponent } from "./@pages/asistencia-sur/asistencia-sur.component";
import { TableroSurComponent } from "./@pages/tablero-sur/tablero-sur.component";
import { VotacionNorteComponent } from "./@pages/votacion-norte/votacion-norte.component";
import { AsistenciaNorteComponent } from "./@pages/asistencia-norte/asistencia-norte.component";
import { CabinaComponent } from './@pages/cabina/cabina.component';

const routes: Routes = [
  { path: "cabina", component: CabinaComponent },
  { path: "characters", component: CharactersComponent },
  { path: "votes", component: VotesComponent },
  { path: "tableroNorte", component: TableroNorteComponent },
  { path: "asistenciaNorte", component: AsistenciaNorteComponent },
  { path: "votacionNorte", component: VotacionNorteComponent },
  { path: "tableroSur", component: TableroSurComponent },
  { path: "asistenciaSur", component: AsistenciaSurComponent },
  { path: "votacionSur", component: VotacionSurComponent },
  { path: "switch", component: SwitchComponent },
  { path: "**", pathMatch: "full", redirectTo: "characters" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
