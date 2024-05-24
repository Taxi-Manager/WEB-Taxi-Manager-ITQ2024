import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-subir-documentos',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './subir-documentos.component.html',
  styleUrl: './subir-documentos.component.css'
})
export class SubirDocumentosComponent {
  public nombresArchivos: { [id: string]: string } = {}; // Objeto para almacenar nombres de archivos (clave: ID, valor: nombre)
  verificado1: any;
  verificado2: any;
  verificado3: any;
  mostrarNombre(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    const inputId = target.id; // Obtener el ID del input

    if (files && files.length > 0) {
      const fileName = files[0].name;
      this.nombresArchivos[inputId] = fileName; // Actualizar el objeto con el nombre del archivo y el ID del input
    } else {
      this.nombresArchivos[inputId] = ''; // Eliminar el nombre del archivo si no se seleccionó ninguno
    }
  }
  cargarDocumentos() {
    if (!this.nombresArchivos['licencia'] || !this.nombresArchivos['ine'] || !this.nombresArchivos['comprobante']) {
      alert('Por favor, seleccione un archivo PDF para cada campo antes de cargar los documentos.');
      return;
    }
    else if (!this.verificado1 || !this.verificado2 || !this.verificado3) {
       alert('Por favor, verifique todos los documentos antes de cargarlos.');
       return;
     }
     else {
       alert('Documentos cargados exitosamente.');
     }
   }
}
