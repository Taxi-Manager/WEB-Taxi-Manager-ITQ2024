import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-consultar-mantenimiento',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ],
  templateUrl: './consultar-mantenimiento.component.html',
  styleUrl: './consultar-mantenimiento.component.css'
})
export class ConsultarMantenimientoComponent {
  identificador: string = '';
  historialMantenimiento: any[] = [];
  historialFiltrado: any[] = [];
  historialCargado: boolean = false;
  mesSeleccionado: number | string = '0'; // Inicialmente se establece como string '0'
  busquedaRealizada: boolean = false;

  constructor(private db: AngularFireDatabase) {} // Inyecta AngularFireDatabase

  buscarHistorial() {
    console.log('Buscando historial de mantenimiento...');
    console.log('Identificador de vehículo:', this.identificador);

    // Consultar la tabla "mantenimientos" en Firebase según el vehiculo
    this.db.list('mantenimientos', ref => ref.orderByChild('vehiculo').equalTo(this.identificador))
      .snapshotChanges().subscribe(data => {
        console.log('Datos recibidos de Firebase:', data);

        // Reiniciar el historial de mantenimiento y cargar los datos obtenidos
        this.historialMantenimiento = [];
        data.forEach(item => {
          const mantenimiento = item.payload.val();
          console.log('Datos de mantenimiento:', mantenimiento);
          this.historialMantenimiento.push(mantenimiento);
        });

        console.log('Historial de mantenimiento cargado:', this.historialMantenimiento);

        this.historialCargado = true;
        this.busquedaRealizada = true; // Agregar esta línea
        this.filtrarPorMes(); // Aplicar filtro por mes seleccionado inicialmente
      });
  }



  filtrarPorMes() {
    // Actualizar la bandera historialCargado al inicio
    this.historialCargado = true;
    this.mesSeleccionado = parseInt(this.mesSeleccionado.toString(), 10);

    if (this.mesSeleccionado === 0) {
      // Mostrar todo el historial si se selecciona "Todos"
      this.historialFiltrado = this.historialMantenimiento;
    } else {
      this.historialFiltrado = this.historialMantenimiento.filter(servicio => {
        const fecha = new Date(servicio.fechaMantenimiento); // Utilizar la fecha de fechaMantenimiento
        return fecha.getMonth() + 1 === this.mesSeleccionado; // Se suma 1 porque getMonth() devuelve un índice base 0
      });
    }
  }

}
