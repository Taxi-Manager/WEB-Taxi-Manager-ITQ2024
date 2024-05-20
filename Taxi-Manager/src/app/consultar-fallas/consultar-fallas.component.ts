import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consultar-fallas',
  standalone: true,
  imports: [FormsModule, NgFor, DatePipe],
  templateUrl: './consultar-fallas.component.html',
  styleUrl: './consultar-fallas.component.css'
})
export class ConsultarFallasComponent {
  fallas: any[] = [
    { descripcion: 'Problema con el motor', estado: 'Pendiente', diagnostico: 'A revisar', fecha: new Date('2024-05-01') },
    { descripcion: 'Cambio de frenos', estado: 'En Proceso', diagnostico: 'En progreso', fecha: new Date('2024-05-02') },
    { descripcion: 'Alineación de ruedas', estado: 'Concluida', diagnostico: 'Completado', fecha: new Date('2024-05-03') }
    // Agregar más fallas según sea necesario
  ];

  fallasFiltradas: any[] = [];
  estadoFiltro: string = '';
  ordenFecha: string = 'asc';

  ngOnInit() {
    this.fallasFiltradas = this.fallas;
  }

  filtrarPorEstado() {
    if (this.estadoFiltro) {
      this.fallasFiltradas = this.fallas.filter(falla => falla.estado === this.estadoFiltro);
    } else {
      this.fallasFiltradas = this.fallas;
    }
    this.ordenarPorFecha();
  }

  ordenarPorFecha() {
    this.fallasFiltradas.sort((a, b) => {
      const dateA = new Date(a.fecha).getTime();
      const dateB = new Date(b.fecha).getTime();
      return this.ordenFecha === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  eliminarFalla(falla: any) {
    this.fallas = this.fallas.filter(f => f !== falla);
    this.filtrarPorEstado();
  }
}
