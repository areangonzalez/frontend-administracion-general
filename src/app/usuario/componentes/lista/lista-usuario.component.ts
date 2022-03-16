import { Component, Input, OnInit } from '@angular/core';
import { ConfigurarListas } from 'src/app/core/model';

@Component({
  selector: 'lista-usuario-componente',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
  @Input("listadosArray") public listadosArray!: ConfigurarListas;

  constructor() { }

  ngOnInit(): void {
  }

}
