import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigurarListas } from '../../../../core/model';

@Component({
  selector: 'componente-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.scss']
})
export class BuscarProductoComponent {
  @Input("listas") public listas!: ConfigurarListas;
  @Output("obtenerBusqueda") public obtenerBusqueda = new EventEmitter();
  public btnSeleccion: boolean = false;
  public mostrar: boolean = false;
  public busquedaAvanzada!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.busquedaAvanzada = _fb.group({
      global_param: '',
      categoriaid: '',
      marcaid: '',
      unidad_medidaid: ''
    });
  }
  /**
   * funcion que emite la devolucion de parametros al componente padre
   */
  public buscar() {
    // busqueda avanzada de los valores del formulario
    let busquedaAvanzada = this.busquedaAvanzada.value;
    let apiBusqueda:any = {};
    let esTrue: boolean = false;
    // busco dentro del objeto segun la clave
    for (const clave in busquedaAvanzada) {
      if(busquedaAvanzada[clave] !== '' && busquedaAvanzada[clave] !== null && (busquedaAvanzada[clave])){
        Object.assign(apiBusqueda, {[clave]: busquedaAvanzada[clave]});
        esTrue = true;
      }
    }
    this.obtenerBusqueda.emit(apiBusqueda);
    this.btnSeleccion = esTrue;
    this.mostrar = esTrue;
  }
  /**
   * limpiador de los campos del formulario
   */
   public limpiarCampos(){
    let busqueda: any = this.busquedaAvanzada.value;
    for (const key in busqueda) {
        busqueda[key] = '';
    }
    this.busquedaAvanzada.patchValue(busqueda);
    this.buscar();
  }
  /**
   * muestra el fomulario de busqueda avanzada
   */
  public mostrarBusquedaAvanzada(){
    return this.mostrar = !this.mostrar;
  }
  /**
   * marca el campo que ha sido seleccionado
   * @param valor [any]
   * @return [boolean]
   */
  marcarCampo(valor: any){
    let marcar:boolean = false;
    marcar = (valor != null && valor != '') ? true : false;
    return marcar;
  }

}
