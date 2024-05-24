import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crear-fallas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crear-fallas.component.html',
  styleUrls: ['./crear-fallas.component.css']
})
export class CrearFallasComponent {
  descripcion: string = '';
  vehiculoSeleccionado: string = '';
  diagnostico: string = '';
  deshabilitarVehiculo: boolean = false;
  estadoVehiculo: string = 'Disponible'; // Inicialmente el vehículo está disponible
  estadoFalla: string = 'En proceso'; // Inicialmente la falla está registrada
  tzvehiculo: string = '';

  constructor(private db: AngularFireDatabase) { }

  registrarFalla() {
    const nuevaFalla = {
      descripcion: this.descripcion,
      tzvehiculo: this.tzvehiculo,
      vehiculo: this.vehiculoSeleccionado,
      diagnostico: this.diagnostico,
      deshabilitarVehiculo: this.deshabilitarVehiculo,
      estadoVehiculo: this.estadoVehiculo,
      fechaRegistro: new Date().toISOString(), // Fecha de registro de la falla
      estadoFalla: 'En proceso' // Estado de la falla

    };
    this.limpiarDatos();

    this.db.list('fallas').push(nuevaFalla)
      .then(() => {
        console.log('Falla registrada con éxito');
        if (this.deshabilitarVehiculo) {
          this.estadoVehiculo = 'En reparación';
          console.log('El vehículo está en reparación');
        }
      })
      .catch(error => console.error('Error al registrar la falla', error));
  }

  cambiarEstadoVehiculo() {
    if (this.deshabilitarVehiculo) {
      this.estadoVehiculo = 'En reparación';
      console.log('El vehículo está en reparación');
    } else {
      this.estadoVehiculo = 'Disponible';
      console.log('El vehículo está disponible');
    }
  }
   // Función para limpiar los datos después de registrar la falla
   limpiarDatos() {
    this.descripcion = '';
    this.vehiculoSeleccionado = '';
    this.diagnostico = '';
    this.deshabilitarVehiculo = false;
    this.estadoVehiculo = 'Disponible';
    this.tzvehiculo = '';
  }
}
