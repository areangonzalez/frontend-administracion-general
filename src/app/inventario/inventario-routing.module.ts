import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent, MarcaComponent, ProductoComponent, ProveedorComponent, UnidadMedidaComponent,  } from '.';
import { CategoriaService, MarcaService, ProductoService, ProveedorService, UnidadMedidaService } from '../core/service';

const routes: Routes = [
  {
    path: 'categoria', component: CategoriaComponent,
    resolve: { categorias: CategoriaService }
    /* canActivate: [AuthGuard],
    data: { loading: true, breadcrumb: 'Stock', title: 'Stock' },
     */
  },
  {
    path: 'marca', component: MarcaComponent,
    resolve: { marcas: MarcaService }
  },
  {
    path: 'producto', component: ProductoComponent,
    resolve: { productos: ProductoService, categorias: CategoriaService, unidadMedidas: UnidadMedidaService, marcas: MarcaService }
  }, {
    path: 'proveedor', component: ProveedorComponent,
    resolve: { proovedores: ProveedorService }
  },{
    path: 'unidad-medida', component: UnidadMedidaComponent,
    resolve: { unidadMedidas: UnidadMedidaService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoriaService, MarcaService, ProductoService, ProveedorService, UnidadMedidaService]
})
export class InventarioRoutingModule { }
