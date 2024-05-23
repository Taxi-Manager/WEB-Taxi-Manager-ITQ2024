import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultarMantenimientoComponent } from './consultar-mantenimiento/consultar-mantenimiento.component';
import { ConsultarFallasComponent } from './consultar-fallas/consultar-fallas.component';
import { CrearFallasComponent } from './crear-fallas/crear-fallas.component';
import { ProgramarMantenimientoComponent } from './programar-mantenimiento/programar-mantenimiento.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultarMantenimientoComponent, ConsultarFallasComponent, CrearFallasComponent,
    ProgramarMantenimientoComponent,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taxi-Manager';
}
