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
  public backendLocalidades = {
    pagesize: 20, pages: 0, total_filtrado: 3, resultado: [
      { id: 2636, nombre: "Aguada Cecilio", departamento: 'alguno', provincia: 'Río Negro', departamentoid: 404, codigo_postal: 8534 },
      { id: 3976, nombre: "Aguada de Guerra", departamento: 'alguno', provincia: 'Río Negro', departamentoid: 399, codigo_postal: 8424 },
      { id: 2616, nombre: "Aguada Guzman", departamento: 'alguno', provincia: 'Río Negro', departamentoid: 400, codigo_postal: 8333 }]};
  public localidadesExtras = {
    pagesize: 20, pages: 0, total_filtrado: 3, resultado: [
      { id: 382, nombre: "Bahia Blanca", departamento: 'alguno', provincia: 'Río Negro', departamentoid: 9, codigo_postal: 8000 },
      { id: 613, nombre: "Carmen De Patagones", departamento: 'alguno', provincia: 'Río Negro', departamentoid: 78, codigo_postal: 8504 },
      { id: 2504, nombre: "Neuquen", departamento: 'alguno', provincia: 'Río Negro', departamentoid: 381, codigo_postal: 8300 }]};
  public provincias = [
    { id: 1, nombre: "Capital Federal" }, { id: 2, nombre: "Buenos Aires" },
    { id: 3, nombre: "Catamarca" }, { id: 8, nombre: "Entre Rios" }, { id: 24, nombre: "Tucuman" } ];

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    /* borrar estos ejemplos y descomentar los de abajo */
    this.listas.backendLocalidades = this.backendLocalidades;
    this.listas.localidadesExtras = this.localidadesExtras;
    this.listas.provincias = this.provincias;

    /* this.listas.backendLocalidades = this._route.snapshot.data["backendLocalidades"];
    this.listas.provincias = this._route.snapshot.data["provincias"];
    this.listas.localidadesExtras = this._route.snapshot.data["localidadesExtras"]; */
  }

}
