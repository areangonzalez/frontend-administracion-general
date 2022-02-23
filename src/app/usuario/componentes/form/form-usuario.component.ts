import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'componente-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.scss']
})
export class FormUsuarioComponent implements OnInit {
  @Input("localidades") public localidades: any;
  @Input("listaRoles") public listaRoles: any;
  @Input("usuario") public usuario: FormGroup | any;
  @Input("submitted") public submitted: boolean = false;
  @Input("baja") public baja: boolean = false;

  constructor() { }

  ngOnInit() {}
  /**
   * convierte el email a minuscula, si el usuario esta escribiendo en mayuscula
   * @param palabra {string} texto que esta siendo tipeado
   */
  public aMinuscula(palabra:any){
    palabra.value = palabra.value.toLowerCase();
  }
}
