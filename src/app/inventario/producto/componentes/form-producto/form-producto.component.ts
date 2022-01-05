import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurarListas } from 'src/app/core/model';
import { UtilService, ProductoService } from 'src/app/core/service';

@Component({
  selector: 'componente-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
  @Input("listas") public listas!: ConfigurarListas;
  @Input("datosProducto") public datosProducto: any;
  @Output("confirmacionGuardado") public confirmacionGuardado = new EventEmitter();

  public productoForm!: FormGroup;
  public submitted: boolean = false;

  constructor( private _fb: FormBuilder, private _util: UtilService, private _productoService: ProductoService ) {
    this.productoForm = _fb.group({
      id: 0,
      codigo: '',
      nombre: ['', Validators.required],
      marcaid: ['', Validators.required],
      unidad_valor: ['', Validators.required],
      unidad_medidaid: ['', Validators.required],
      categoriaid: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.datosProducto) {
      if (this.datosProducto.id !== undefined) {
        this.productoForm.patchValue(this.datosProducto);
      }
    }
  }
  /**
   * Validad que sea un número entero o decimal
   * @param numero {number} valor númerico
   */
  validarUnidad(numero: any) {
    if (!this._util.validarNumeroDecimal(numero.value)) {
      numero.value = numero.value.substring(0, numero.value.length -1);
      if (this.productoForm.controls.unidad !== undefined) {
        this.productoForm.controls.unidad.patchValue(numero.value);
      }
    }
  }
  /**
   * Valida el formulario mediante los campos requeridos
   * Si es valido aplica el guardado de producto
   */
  validarFormulario() {
    this.submitted = true;
    if (this.productoForm.invalid) {
      return;
    }else{
      let params: any = this.productoForm.value;
      if (params["id"] == 0 ) {
        delete(params["id"]);
        this.guardarProducto(params);
      }else{
        this.guardarProducto(params, params["id"]);
      }
    }
  }
  /**
   *
   * @param params {objeto} datos que contiene un producto
   * @param id {number} identificidaor del producto que se va a editar,
   *                    (?) opcional para el creado no se necesita el parametro id
   */
  guardarProducto(params: any, id?: number ) {
    if (id) {// editar producto
      console.log("Se ha editado un producto");
      this.confirmacionGuardado.emit(true);
      /* this._productoService.guardar(params, id).subscribe(
        resultado => {
          this.confirmacionGuardado.emit(true);
        }, error => { console.log(error); }) */
    } else { // Crear producto
      console.log("Se ha creado un producto");
      this.confirmacionGuardado.emit(true);
      /* this._productoService.guardar(params).subscribe(
        resultado => {
          this.confirmacionGuardado.emit(true);
        }, error => { console.log(error); }) */
    }
  }

  cancelar() {
    this.confirmacionGuardado.emit(false);
  }

}
