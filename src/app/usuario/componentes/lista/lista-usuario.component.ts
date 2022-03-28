import { Component, Input, OnInit } from '@angular/core';
import { ConfigurarListas, ConfigurarPagina } from 'src/app/core/model';
import { UsuarioService, NotificacionService, ConfiguracionParaPaginarService } from 'src/app/core/service';

@Component({
  selector: 'lista-usuario-componente',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.scss']
})
export class ListaUsuarioComponent implements OnInit {
  @Input("listadosArray") public listadosArray!: ConfigurarListas;
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();

  constructor( private _usuarioService: UsuarioService, private _msj: NotificacionService, private _configurarPaginacion: ConfiguracionParaPaginarService ) { }

  ngOnInit(): void {
  }

  actualizar(confirmar: boolean) {
    if (confirmar) {
      let params: any = { pagesize: 20, page: 1 };
      this._usuarioService.buscar(params).subscribe(
        respuesta =>  {
          this.prepararListado(respuesta, 1);
        },
        error => { this._msj.showDanger(error); }
        );
    }
  }

  /**
   * Prepara el listado y su paginación
   * @param listado Listado de array de objetos
   * @param pagina numero de pagina
   */
   prepararListado(listado:any, pagina:number) {
    this.configPaginacion = this._configurarPaginacion.config(listado, pagina);
    this.listadosArray.usuarios = listado.resultado;
  }

}
