import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-verificar-documentos',
  standalone: true,
  imports: [NgIf],
  templateUrl: './verificar-documentos.component.html',
  styleUrl: './verificar-documentos.component.css'
})
export class VerificarDocumentosComponent {

  verificacionDocumentosVisible: boolean = false;

  mostrarDocumentos() {
    this.verificacionDocumentosVisible = true;
  }

  cerrarVerificacion() {
    this.verificacionDocumentosVisible = false;
  }

  cargarDocumentos() {
    // Lógica para cargar los documentos verificados
  }
  public nombresArchivos: { [id: string]: string } = {}; // Objeto para almacenar nombres de archivos (clave: ID, valor: nombre)

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

}

