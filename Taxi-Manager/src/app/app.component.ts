import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsultarMantenimientoComponent } from './consultar-mantenimiento/consultar-mantenimiento.component';
import { ConsultarFallasComponent } from './consultar-fallas/consultar-fallas.component';
import { CrearFallasComponent } from './crear-fallas/crear-fallas.component';
import { ProgramarMantenimientoComponent } from './programar-mantenimiento/programar-mantenimiento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ServiceWorkerModule } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConsultarMantenimientoComponent, ConsultarFallasComponent, CrearFallasComponent,
    ProgramarMantenimientoComponent, ReactiveFormsModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatCheckboxModule,
    MatProgressBarModule, MatButtonModule, MatSnackBarModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taxi-Manager';
}
