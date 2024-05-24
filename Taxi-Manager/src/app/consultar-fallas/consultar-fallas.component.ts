import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgFor } from '@angular/common';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-consultar-fallas',
  standalone: true,
  imports: [FormsModule, DatePipe, NgFor],
  templateUrl: './consultar-fallas.component.html',
  styleUrls: ['./consultar-fallas.component.css']
})
export class ConsultarFallasComponent implements OnInit {
  fallas: Observable<any[]> | undefined;
  fallasFiltradas: any[] = [];
  estadoFiltro: string = 'Todos';
  ordenFecha: string = 'asc';

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    // Obtener la lista de fallas desde Firebase
    this.fallas = this.db.list('fallas').snapshotChanges();
    this.fallas.subscribe(data => {
      // Al recibir los datos, asignarlos a la variable fallasFiltradas
      this.fallasFiltradas = data.map(item => ({ key: item.payload.key, ...item.payload.val() }));
      // Filtrar y ordenar las fallas
      this.filtrarPorEstado();
    });
  }

  filtrarPorEstado() {
    if (this.estadoFiltro && this.estadoFiltro.trim() !== '') {
      // Aplicar filtro si hay un estado seleccionado
      this.fallas?.subscribe(items => {
        console.log('Filtrando por estado:', this.estadoFiltro);
        switch (this.estadoFiltro) {
          case 'Todos':
            this.fallasFiltradas = items.map(item => ({ key: item.payload.key, ...item.payload.val() }));
            break;
          default:
            this.fallasFiltradas = items.map(item => ({ key: item.payload.key, ...item.payload.val() }))
              .filter(falla => falla.estadoFalla === this.estadoFiltro);
        }
        this.ordenarPorFecha();
      });
    }
  }




  ordenarPorFecha() {
    this.fallasFiltradas.sort((a, b) => {
      // Utilizar la fecha de registro para ordenar las fallas
      const dateA = new Date(a.fechaRegistro).getTime();
      const dateB = new Date(b.fechaRegistro).getTime();
      return this.ordenFecha === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  eliminarFalla(falla: any) {
    // Obtener la clave única de la falla
    const fallaKey = falla.key;
    // Eliminar la falla de la base de datos
    this.db.list('fallas').remove(fallaKey);
    console.log('Falla eliminada');
  }
}
