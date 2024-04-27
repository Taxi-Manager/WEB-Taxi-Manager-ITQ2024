import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {CrearConductorComponent} from './compGestionConductores/crear-conductor/crear-conductor.component'
import {EditDeleteUpdateComponent} from './compGestionConductores/edit-delete-update/edit-delete-update.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrearConductorComponent,EditDeleteUpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taxi-Manager';
}
