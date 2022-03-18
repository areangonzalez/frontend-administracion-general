import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigurarListas, ConfigurarPagina } from '../core/model';
import { ConfiguracionParaPaginarService } from '../core/service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public listados: ConfigurarListas = {};
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();

  constructor( private _route: ActivatedRoute, private _configurarPaginacion: ConfiguracionParaPaginarService) { }

  ngOnInit(): void {
    this.listados.localidades = this._route.snapshot.data["localidades"];
    this.listados.modulos = this._route.snapshot.data["modulos"];
    this.prepararListado(this._route.snapshot.data["usuarios"], 1);
  }

  /**
   * Prepara el listado y su paginación
   * @param listado Listado de array de objetos
   * @param pagina numero de pagina
   */
   prepararListado(listado:any, pagina:number) {
    this.configPaginacion = this._configurarPaginacion.config(listado, pagina);
    this.listados.usuarios = listado.resultado;
  }

}
