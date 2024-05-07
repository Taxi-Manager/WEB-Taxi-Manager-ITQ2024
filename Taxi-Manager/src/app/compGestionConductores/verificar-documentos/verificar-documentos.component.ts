import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-verificar-documentos',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './verificar-documentos.component.html',
  styleUrl: './verificar-documentos.component.css'
})

export class VerificarDocumentosComponent {

  verificacionDocumentosVisible: boolean = false;
  verificado1: any;
  verificado2: any;
  verificado3: any;

  mostrarDocumentos() {
    this.verificacionDocumentosVisible = true;
  }

  cerrarVerificacion() {
    this.verificacionDocumentosVisible = false;
  }

  cargarDocumentos() {
   if (!this.verificado1 || !this.verificado2 || !this.verificado3) {
      alert('Por favor, verifique todos los documentos antes de cargarlos.');
      return;
    }
    else {
      alert('Documentos cargados exitosamente.');
      this.verificacionDocumentosVisible = false;
    }
  }
  verArchivo() {
    // Aquí puedes escribir la lógica para abrir una nueva ventana o pestaña del navegador
    // que muestre el archivo PDF
    window.open('/ruta/a/tu/archivo/licencia.pdf', '_blank');
  }
}

