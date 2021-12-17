import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilService } from 'src/app/core/service';

@Component({
  selector: 'shared-busqueda-avanzada',
  templateUrl: './busqueda-avanzada.component.html',
  styleUrls: ['./busqueda-avanzada.component.scss']
})
export class BusquedaAvanzadaComponent implements OnInit {
    @Input("placeholder") public placeholder: any;
    @Output("obtenerBusqueda") public obtenerBusqueda = new EventEmitter();
    public btnSeleccion: boolean = false;
    public mostrar: boolean = false;
    public busquedaAvanzada: FormGroup;

    constructor( private _fb: FormBuilder, private _util: UtilService ) {
      this.busquedaAvanzada = _fb.group({
        global_param: ''
      });
    }

    ngOnInit() {
    }

    /**
     * funcion que emite la devolucion de parametros al componente padre
     */
    public buscar() {
      // busqueda avanzada de los valores del formulario
      let busquedaAvanzada = this.busquedaAvanzada.value;
      let apiBusqueda:any = {};
      // busco dentro del objeto segun la clave
      for (const clave in busquedaAvanzada) {
          if(busquedaAvanzada[clave] !== '' && busquedaAvanzada[clave] !== null && (busquedaAvanzada[clave])){
            Object.assign(apiBusqueda, {[clave]: busquedaAvanzada[clave]});
        }
      }
      this.obtenerBusqueda.emit(apiBusqueda);
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
}
