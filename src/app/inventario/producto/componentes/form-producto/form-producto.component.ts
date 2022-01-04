import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/core/service';

@Component({
  selector: 'componente-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  public productoForm!: FormGroup;
  public submitted: boolean = false;

  constructor( private _fb: FormBuilder, private _util: UtilService ) {
    this.productoForm = _fb.group({
      id: '',
      codigo: '',
      nombre: ['', Validators.required],
      marcaid: ['', Validators.required],
      unidad_medidaid: ['', Validators.required],
      categoriaid: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  validarUnidad(numero: any) {
    if (!this._util.validarNumeroDecimal(numero.value)) {
      numero.value = numero.value.substring(0, numero.value.length -1);
      if (this.productoForm.controls.unidad !== undefined) {
        this.productoForm.controls.unidad.patchValue(numero.value);
      }
    }
  }

}
