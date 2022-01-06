import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente-localidad-extra-lista',
  templateUrl: './localidad-extra-lista.component.html',
  styleUrls: ['./localidad-extra-lista.component.scss']
})
export class LocalidadExtraListaComponent implements OnInit {
  public localidadesExtras: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
