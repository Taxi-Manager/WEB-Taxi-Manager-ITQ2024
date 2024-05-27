import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component'


import {CrearConductorComponent} from './compGestionConductores/crear-conductor/crear-conductor.component'
import {EditDeleteUpdateComponent} from './compGestionConductores/edit-delete-update/edit-delete-update.component'
import {VerificarDocumentosComponent} from './compGestionConductores/verificar-documentos/verificar-documentos.component';
import { SubirDocumentosComponent } from './compGestionConductores/subir-documentos/subir-documentos.component';
import { ConsultarConductorComponent } from './compGestionConductores/consultar-conductor/consultar-conductor.component';
import { Pantalla3DComponent } from './componentes3D/pantalla3-d/pantalla3-d.component';
import { DashboardComponent } from './componentesPantallaMain/dashboard/dashboard.component'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CrearConductorComponent, EditDeleteUpdateComponent, VerificarDocumentosComponent,
        SubirDocumentosComponent, ConsultarConductorComponent, Pantalla3DComponent, DashboardComponent, NewUserComponent, LoginComponent]
})
export class AppComponent {
  title = 'Taxi-Manager';
}
