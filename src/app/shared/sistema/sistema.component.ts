import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent implements OnInit {
  title = 'frontend-administracion-general';
  mostrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ocultarMenu(ocultar: boolean) {
    return this.mostrar = ocultar;
  }



}
