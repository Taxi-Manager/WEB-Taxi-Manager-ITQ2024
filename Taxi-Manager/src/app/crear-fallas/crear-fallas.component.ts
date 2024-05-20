import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-fallas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-fallas.component.html',
  styleUrl: './crear-fallas.component.css'
})
export class CrearFallasComponent {
  descripcion: string = '';
  vehiculoSeleccionado: string = '';
  diagnostico: string = '';
  deshabilitarVehiculo: boolean = false;
  estadoVehiculo: string = 'Disponible'; // Inicialmente el vehículo está disponible

  constructor() { }

  registrarFalla() {
    // Lógica para registrar la falla
    console.log('Falla registrada:', {
      descripcion: this.descripcion,
      vehiculo: this.vehiculoSeleccionado,
      diagnostico: this.diagnostico,
      deshabilitarVehiculo: this.deshabilitarVehiculo
    });

    if (this.deshabilitarVehiculo) {
      // Lógica para cambiar el estado del vehículo a "En reparación"
      this.estadoVehiculo = 'En reparación';
      console.log('El vehículo está en reparación');
    }
  }

  cambiarEstadoVehiculo() {
    if (this.deshabilitarVehiculo) {
      // Lógica para cambiar el estado del vehículo a "En reparación"
      this.estadoVehiculo = 'En reparación';
      console.log('El vehículo está en reparación');
    } else {
      // Lógica para restaurar el estado del vehículo
      this.estadoVehiculo = 'Disponible';
      console.log('El vehículo está disponible');
    }
  }
}
