import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/core/service';

@Component({
  selector: 'componente-localidad-form',
  templateUrl: './localidad-form.component.html',
  styleUrls: ['./localidad-form.component.scss']
})
export class LocalidadFormComponent implements OnInit {
  @Input("provincias") public provincias: any; // array que contiene el/los listados para el componente
  public localidadForm: FormGroup;
  public submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _util: UtilService) {
    this.localidadForm = _fb.group({
      id: '',
      nombre: ['', [Validators.required]],
      codigo_postal: ['', [Validators.required, Validators.minLength(4)]],
      departamentoid: ['', [Validators.required]],
      provinciaid: ''
    });
  }

  ngOnInit(): void {
  }

  public departamentoPorProvincia(valor: any) {
    /* if (valor != "") {
      let provinciaid = parseInt(valor);
      this._departamentoService.buscarPorProvinciaId(provinciaid).subscribe(
        respuesta => {
          this.departamentos = respuesta;
        }, error => { this._msj.cancelado(error); }
      );
    }else{
      this.departamentos = [];
    } */
  }
  /**
   * @function soloNumero valida que los datos ingresados en un input sean solo numeros.
   * @param datos objeto que contiene los datos de un input.
   */
   public soloNumero(datos:any){
    if (!this._util.validarNumero(datos.value)) {
      datos.value = datos.value.substring(0,datos.value.length - 1);
    }
  }

}
