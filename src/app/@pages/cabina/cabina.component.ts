import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cabina",
  templateUrl: "./cabina.component.html",
  styleUrls: ["./cabina.component.scss"],
})
export class CabinaComponent implements OnInit {
  curules: any[] = new Array(500);
  constructor() {}

  ngOnInit(): void {}
}
