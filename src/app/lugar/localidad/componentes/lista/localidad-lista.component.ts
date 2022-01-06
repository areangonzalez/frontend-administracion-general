import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'componente-localidad-lista',
  templateUrl: './localidad-lista.component.html',
  styleUrls: ['./localidad-lista.component.scss']
})
export class LocalidadListaComponent implements OnInit {
  public backendLocalidades: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
