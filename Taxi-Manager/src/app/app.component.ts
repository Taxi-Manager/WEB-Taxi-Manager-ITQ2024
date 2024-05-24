import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultarMantenimientoComponent } from './consultar-mantenimiento/consultar-mantenimiento.component';
import { ConsultarFallasComponent } from './consultar-fallas/consultar-fallas.component';
import { CrearFallasComponent } from './crear-fallas/crear-fallas.component';
import { ProgramarMantenimientoComponent } from './programar-mantenimiento/programar-mantenimiento.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultarMantenimientoComponent, ConsultarFallasComponent, CrearFallasComponent,
    ProgramarMantenimientoComponent, NgFor

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'Taxi-Manager';
}
