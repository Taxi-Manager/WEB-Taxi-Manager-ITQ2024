import { Component } from '@angular/core';
//import { GuardarDatosVehiculoComponent } from './compGestionVehiculos/guardar-datos-vehiculo/guardar-datos-vehiculo.component';
import { AcessoFuncionRegistroComponent } from './compGestionVehiculos/acesso-funcion-registro/acesso-funcion-registro.component';
import { AcessoFuncionRegistroModule } from './compGestionVehiculos/acesso-funcion-registro/acesso-funcion-registro.component.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //GuardarDatosVehiculoComponent,
    AcessoFuncionRegistroModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Taxi-Manager';
}
