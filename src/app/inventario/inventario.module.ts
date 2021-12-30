import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InventarioRoutingModule } from './inventario-routing.module';
import { MarcaComponent } from './marca';
import { ProductoComponent, TablaProductoComponent, BuscarProductoComponent } from './producto';
import { UnidadMedidaComponent } from './unidad-medida';
import { CategoriaComponent } from './categoria';
import { ProveedorComponent } from './proveedor';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MarcaComponent,
    ProductoComponent, TablaProductoComponent, BuscarProductoComponent,
    UnidadMedidaComponent,
    CategoriaComponent,
    ProveedorComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    InventarioRoutingModule,
    SharedModule
  ]
})
export class InventarioModule { }
