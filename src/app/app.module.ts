import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { GraphqlModule } from "./@core/modules/graphql/graphql.module";
import { CharactersComponent } from "./@pages/characters/characters.component";
import { VotesComponent } from "./@pages/votes/votes.component";
import { CardComponent } from "./@core/components/card/card.component";
import { TruncatePipe } from "./@core/pipes/truncate.pipe";
import { LoadingComponent } from "./@core/components/loading/loading.component";
import { NavbarComponent } from "./@core/components/navbar/navbar.component";
import { ChartsModule } from "ng2-charts";
import { BarChartComponent } from "./@core/components/bar-chart/bar-chart.component";
import { AsistenciaNorteComponent } from "./@pages/asistencia-norte/asistencia-norte.component";
import { AsistenciaSurComponent } from "./@pages/asistencia-sur/asistencia-sur.component";
import { VotacionNorteComponent } from "./@pages/votacion-norte/votacion-norte.component";
import { VotacionSurComponent } from "./@pages/votacion-sur/votacion-sur.component";
import { SwitchComponent } from "./@pages/switch/switch.component";
import { TableroNorteComponent } from "./@pages/tablero-norte/tablero-norte.component";
import { TableroSurComponent } from "./@pages/tablero-sur/tablero-sur.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { CabinaComponent } from "./@pages/cabina/cabina.component";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    VotesComponent,
    CardComponent,
    TruncatePipe,
    LoadingComponent,
    NavbarComponent,
    BarChartComponent,
    AsistenciaNorteComponent,
    AsistenciaSurComponent,
    VotacionNorteComponent,
    VotacionSurComponent,
    SwitchComponent,
    TableroNorteComponent,
    TableroSurComponent,
    CabinaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphqlModule,
    ChartsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
