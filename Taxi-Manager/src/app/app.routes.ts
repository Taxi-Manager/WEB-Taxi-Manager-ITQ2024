import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './componentesPantallaMain/dashboard/dashboard.component'
import { ConsultarConductorComponent } from './compGestionConductores/consultar-conductor/consultar-conductor.component';
import { CrearConductorComponent } from './compGestionConductores/crear-conductor/crear-conductor.component';
import { SubirDocumentosComponent } from './compGestionConductores/subir-documentos/subir-documentos.component';
import { VerificarDocumentosComponent } from './compGestionConductores/verificar-documentos/verificar-documentos.component';
import { EditDeleteUpdateComponent } from './compGestionConductores/edit-delete-update/edit-delete-update.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserexistenteComponent } from './userexistente/userexistente.component';
import { ConsultarFallasComponent } from './consultar-fallas/consultar-fallas.component';
import { ConsultarMantenimientoComponent } from './consultar-mantenimiento/consultar-mantenimiento.component';
import { CrearFallasComponent } from './crear-fallas/crear-fallas.component';
import { ProgramarMantenimientoComponent } from './programar-mantenimiento/programar-mantenimiento.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'conductores/filtrar', component: ConsultarConductorComponent },
  { path: 'conductores/crear', component: CrearConductorComponent },
  { path: 'conductores/subirdoc', component: SubirDocumentosComponent },
  { path: 'conductores/verificar', component: VerificarDocumentosComponent },
  { path: 'conductores/editar', component: EditDeleteUpdateComponent },
  { path: 'opciones', component: NewUserComponent},
  { path: 'reportes/consulta-fallas', component: ConsultarFallasComponent},
  { path: 'reportes/consulta-mantenimiento', component: ConsultarMantenimientoComponent},
  { path: 'reportes/crear-falla', component: CrearFallasComponent},
  { path: 'reportes/programar', component: ProgramarMantenimientoComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
