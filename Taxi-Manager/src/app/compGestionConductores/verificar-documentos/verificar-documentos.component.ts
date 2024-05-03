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
}
