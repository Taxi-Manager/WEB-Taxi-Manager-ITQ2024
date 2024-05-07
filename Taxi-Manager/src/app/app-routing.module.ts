import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { InventarioComponent } from './inventario/inventario.component';
//import { VentasComponent } from './ventas/ventas.component';
//import { ApartadosComponent } from './apartados/apartados.component';
//import { ProveedoresComponent } from './proveedores/proveedores.component';
//import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [/*
  { path: 'inventario', component: InventarioComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'apartados', component: ApartadosComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '', redirectTo: '/inventario', pathMatch: 'full' },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
