import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'shared-form-personalizado',
  templateUrl: './form-personalizado.component.html',
  styleUrls: ['./form-personalizado.component.scss']
})
export class FormPersonalizadoComponent implements OnInit {
  @Input("armarForm") public armarForm:any;
  @Input("importarDatos") public importarDatos:any;
  @Output("obtenerDatos") public obtenerDatos = new EventEmitter();
  @Output("cancelarForm") public cancelarForm = new EventEmitter();

  public submitted: boolean = false;
  public formulario: FormGroup;
  public crearInputs: any[] = [];
  constructor( private _fb: FormBuilder ) {}

  ngOnInit() {
    this.formulario = this.armadoFormulario(this.armarForm);
    if (this.importarDatos){
      this.cargarDatos(this.importarDatos);
    }
  }

  /**
   * Armo el objeto desde un array para agregarlo en un Group de FormBuilder
   * @param arrayKeysForm [Array] array que contiene los nombres de la tabla a armar.
   */
  armadoFormulario(arrayKeysForm: any){
    let controls: any = {};

    for (let i = 0; i < arrayKeysForm.length; i++) {
      if (arrayKeysForm[i] !== 'id' ){
        controls["" + arrayKeysForm[i]] = ['', Validators.required];
        this.crearInputs.push(arrayKeysForm[i]);
      }
    }

    let formArray = this._fb.group(controls);

    return formArray;
  }
  /**
   * cancelo el formulario
   */
  cancelar() {
    this.cancelarForm.emit(true);
  }
  /**
   * Valido el formulario
   */
  validarForm() {
    this.submitted = true;
    // invalido
    if (this.formulario.invalid) {
      return;
    }else{ // valido
      let datos = this.formulario.value;
      datos["id"] = (this.importarDatos !== undefined) ? this.importarDatos["id"] : 0;
      this.obtenerDatos.emit(datos);
    }
  }
  /**
   * se cargan los datos para editar el formulario
   * @param datos
   */
  cargarDatos(datos:any) {
    this.formulario.patchValue(datos);
  }
}
