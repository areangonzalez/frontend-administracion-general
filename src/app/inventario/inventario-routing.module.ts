import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent, MarcaComponent, ProductoComponent, ProveedorComponent, UnidadMedidaComponent,  } from '.';
import { ProductoService } from '../core/service';

const routes: Routes = [
  {
    path: 'categoria', component: CategoriaComponent,
    /* canActivate: [AuthGuard],
    data: { loading: true, breadcrumb: 'Stock', title: 'Stock' },
    resolve: { inventario: InventarioService, categorias: CategoriaService, unidadMedida: UnidadMedidaService, marcas: MarcaService } */
  },
  {
    path: 'marca', component: MarcaComponent,
  },
  {
    path: 'producto', component: ProductoComponent,
    //resolve: { productos: ProductoService }
  }, {
    path: 'proovedor', component: ProveedorComponent,
  },{
    path: 'unidad-medida', component: UnidadMedidaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductoService]
})
export class InventarioRoutingModule { }
