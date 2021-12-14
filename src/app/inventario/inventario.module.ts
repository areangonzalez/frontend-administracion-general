import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventarioRoutingModule } from './inventario-routing.module';
import { MarcaComponent } from './marca';
import { ProductoComponent } from './producto';
import { UnidadMedidaComponent } from './unidad-medida';
import { CategoriaComponent } from './categoria';
import { ProveedorComponent } from './proveedor';


@NgModule({
  declarations: [
    MarcaComponent,
    ProductoComponent,
    UnidadMedidaComponent,
    CategoriaComponent,
    ProveedorComponent
  ],
  imports: [
    CommonModule,
    InventarioRoutingModule
  ]
})
export class InventarioModule { }
