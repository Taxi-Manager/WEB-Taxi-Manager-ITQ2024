import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-consultar-mantenimiento',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
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

  buscarHistorial() {
    // Simulación de datos de historial de mantenimiento (reemplaza con tu lógica de obtención de datos)
    this.historialMantenimiento = [
      { fecha: '2024-01-15', tipo: 'Mantenimiento Preventivo', kilometraje: 25000, observaciones: 'Cambio de aceite' },
      { fecha: '2024-02-20', tipo: 'Reparación', kilometraje: 25500, observaciones: 'Cambio de frenos' },
      { fecha: '2024-03-10', tipo: 'Mantenimiento Preventivo', kilometraje: 26000, observaciones: 'Alineación y balanceo' }
      // Agrega más datos según sea necesario
    ];

    this.historialCargado = true;
    this.busquedaRealizada = true; // Agregar esta línea
    this.filtrarPorMes(); // Aplicar filtro por mes seleccionado inicialmente
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
        const fecha = new Date(servicio.fecha);
        return fecha.getMonth() + 1 === this.mesSeleccionado; // Se suma 1 porque getMonth() devuelve un índice base 0
      });
    }
  }



}
