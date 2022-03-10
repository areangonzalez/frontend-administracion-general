import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurarListas } from 'src/app/core/model';

@Component({
  selector: 'lugar-localidad',
  templateUrl: './localidad.component.html',
  styleUrls: ['./localidad.component.scss']
})
export class LocalidadComponent implements OnInit {
  public listas: ConfigurarListas = {}; // array de objetos de listas
  /* Listas de ejemplos que se deben remplazar con el api */
  public provincias = [
    { id: 1, nombre: "Capital Federal" }, { id: 2, nombre: "Buenos Aires" },
    { id: 3, nombre: "Catamarca" }, { id: 8, nombre: "Entre Rios" }, { id: 24, nombre: "Tucuman" } ];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    /* borrar estos ejemplos y descomentar los de abajo */
    this.listas.provincias = this.provincias;

    this.listas.localidadesBackend = this._route.snapshot.data["localidadesBackend"];
    this.listas.localidadesExtras = this._route.snapshot.data["localidadesExtras"];
    // this.listas.provincias = this._route.snapshot.data["provincias"];
  }

}
