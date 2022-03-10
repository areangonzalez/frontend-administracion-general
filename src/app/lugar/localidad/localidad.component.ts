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

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listas.localidadesBackend = this._route.snapshot.data["localidadesBackend"];
    this.listas.localidadesExtras = this._route.snapshot.data["localidadesExtras"];
    this.listas.provincias = this._route.snapshot.data["provincias"];
  }

}
