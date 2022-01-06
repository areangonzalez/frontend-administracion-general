import { Component, Input, OnInit } from '@angular/core';
import { ConfigurarPagina } from 'src/app/core/model';
import { ConfiguracionParaPaginarService } from 'src/app/core/service';

@Component({
  selector: 'componente-localidad-extra-lista',
  templateUrl: './localidad-extra-lista.component.html',
  styleUrls: ['./localidad-extra-lista.component.scss']
})
export class LocalidadExtraListaComponent implements OnInit {
  @Input("listados") public listados: any;
  public localidadesExtras: any = [];
  public configPaginacion: ConfigurarPagina = new ConfigurarPagina();
  public tamanioPaginaLista: any = [];


  constructor(private _configPagina: ConfiguracionParaPaginarService) { }

  ngOnInit(): void {
    this.prepararListado(this.listados.localidadesExtras, 1);
  }
  /**
   * prepara el listado con paginacion
   * @param listado listado de localidades
   * @param pagina numero de pagina
   */
   prepararListado(listado:any, pagina: number) {
    // preparo la variable con la configuracion para el paginado
    this.configPaginacion = this._configPagina.config(listado, pagina);

    this.localidadesExtras = listado.resultado;
    this.tamanioPaginaLista = [{size: 10}, {size: 20}, {size: 50}, {size: 100}];
  }

}
