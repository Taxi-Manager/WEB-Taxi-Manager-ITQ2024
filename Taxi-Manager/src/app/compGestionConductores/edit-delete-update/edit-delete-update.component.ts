import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-delete-update',
  standalone: true,
  imports: [NgIf],
  templateUrl: './edit-delete-update.component.html',
  styleUrl: './edit-delete-update.component.css'
})
export class EditDeleteUpdateComponent {
  nombreArchivoLicencia: string = "documento.pdf"; // Nombre del archivo de licencia existente
  nombreArchivoLicenciaOriginal: string = "documento.pdf"; // Nombre del archivo de licencia original
  nombreArchivoINE: string = "documento.pdf"; // Nombre del archivo del INE existente
  nombreArchivoINEOriginal: string = "documento.pdf"; // Nombre del archivo del INE original
  nombreArchivoComprobante: string = "documento.pdf"; // Nombre del archivo de comprobante de domicilio existente
  nombreArchivoComprobanteOriginal: string = "documento.pdf"; // Nombre del archivo de comprobante de domicilio original

  mostrarSubirArchivoLicencia: boolean = false; // Variable para controlar la visibilidad del área de subir archivo de licencia
  mostrarSubirArchivoINE: boolean = false; // Variable para controlar la visibilidad del área de subir archivo de INE
  mostrarSubirArchivoComprobante: boolean = false; // Variable para controlar la visibilidad del área de subir archivo de comprobante de domicilio

  mostrarBotonReemplazarLicencia: boolean = true; // Variable para controlar la visibilidad del botón de reemplazar archivo de licencia
  mostrarBotonReemplazarINE: boolean = true; // Variable para controlar la visibilidad del botón de reemplazar archivo de INE
  mostrarBotonReemplazarComprobante: boolean = true; // Variable para controlar la visibilidad del botón de reemplazar archivo de comprobante de domicilio

  mostrarBotonConservarLicencia: boolean = true; // Variable para controlar la visibilidad del botón de conservar archivo de licencia
  mostrarBotonConservarINE: boolean = true; // Variable para controlar la visibilidad del botón de conservar archivo de INE
  mostrarBotonConservarComprobante: boolean = true; // Variable para controlar la visibilidad del botón de conservar archivo de comprobante de domicilio

  mostrarBotonCancelarLicencia: boolean = false; // Variable para controlar la visibilidad del botón de cancelar de licencia
  mostrarBotonCancelarINE: boolean = false; // Variable para controlar la visibilidad del botón de cancelar de INE
  mostrarBotonCancelarComprobante: boolean = false; // Variable para controlar la visibilidad del botón de cancelar de comprobante de domicilio

  mostrarNombreArchivoLicencia: boolean = false;
mostrarNombreArchivoINE: boolean = false;
mostrarNombreArchivoComprobante: boolean = false;

  archivoSeleccionado: any; // Variable para almacenar el archivo seleccionado

  // Función que se llama cuando se hace clic en el botón "Reemplazar" para licencia
  reemplazarDocumento(tipoDocumento: string) {
    switch (tipoDocumento) {
      case 'licencia':
        this.mostrarSubirArchivoLicencia = true;
        this.mostrarBotonReemplazarLicencia = false;
        this.mostrarBotonConservarLicencia = false;
        break;
      case 'ine':
        this.mostrarSubirArchivoINE = true;
        this.mostrarBotonReemplazarINE = false;
        this.mostrarBotonConservarINE = false;
        break;
      case 'comprobante':
        this.mostrarSubirArchivoComprobante = true;
        this.mostrarBotonReemplazarComprobante = false;
        this.mostrarBotonConservarComprobante = false;
        break;
      default:
        break;
    }
  }

  // Función que se llama cuando se hace clic en el botón "Conservar" para licencia
  conservarDocumento(tipoDocumento: string) {
    switch (tipoDocumento) {
      case 'licencia':
        console.log('Licencia de conducir conservada');
        this.mostrarBotonReemplazarLicencia = false;
        this.mostrarBotonConservarLicencia = false;
        this.mostrarBotonCancelarLicencia = true;
        break;
      case 'ine':
        console.log('INE conservada');
        this.mostrarBotonReemplazarINE = false;
        this.mostrarBotonConservarINE = false;
        this.mostrarBotonCancelarINE = true;
        break;
      case 'comprobante':
        console.log('Comprobante de domicilio conservado');
        this.mostrarBotonReemplazarComprobante = false;
        this.mostrarBotonConservarComprobante = false;
        this.mostrarBotonCancelarComprobante = true;
        break;
      default:
        break;
    }
  }

  // Función que se llama cuando se selecciona un nuevo archivo para subir
  subirArchivo(event: any, tipoDocumento: string) {
    this.archivoSeleccionado = event.target.files[0];
    switch (tipoDocumento) {
      case 'licencia':
        this.mostrarNombreArchivoLicencia = true;
        break;
      case 'ine':
        this.mostrarNombreArchivoINE = true;
        break;
      case 'comprobante':
        this.mostrarNombreArchivoComprobante = true;
        break;
      default:
        break;
    }
  }


  // Función que se llama cuando se hace clic en el botón "Guardar Cambios"
  guardarCambios(tipoDocumento: string) {
    if (this.archivoSeleccionado) {
      console.log('Nuevo archivo seleccionado:', this.archivoSeleccionado.name);
      switch (tipoDocumento) {
        case 'licencia':
          this.nombreArchivoLicencia = this.archivoSeleccionado.name;
          this.mostrarSubirArchivoLicencia = false;
          this.mostrarBotonCancelarLicencia = true;
          break;
        case 'ine':
          this.nombreArchivoINE = this.archivoSeleccionado.name;
          this.mostrarSubirArchivoINE = false;
          this.mostrarBotonCancelarINE = true;
          break;
        case 'comprobante':
          this.nombreArchivoComprobante = this.archivoSeleccionado.name;
          this.mostrarSubirArchivoComprobante = false;
          this.mostrarBotonCancelarComprobante = true;
          break;
        default:
          break;
      }
    }
    console.log('Cambios guardados');
  }

  // Función que se llama cuando se hace clic en el botón "Cancelar"
  cancelar(tipoDocumento: string) {
    console.log('Operación cancelada');
    switch (tipoDocumento) {
      case 'licencia':
        this.mostrarSubirArchivoLicencia = false;
        this.mostrarBotonReemplazarLicencia = true;
        this.mostrarBotonConservarLicencia = true;
        this.mostrarBotonCancelarLicencia = false;
        // Revertir el nombre de archivo a su valor original
        this.nombreArchivoLicencia = this.nombreArchivoLicenciaOriginal;
        break;
      case 'ine':
        this.mostrarSubirArchivoINE = false;
        this.mostrarBotonReemplazarINE = true;
        this.mostrarBotonConservarINE = true;
        this.mostrarBotonCancelarINE = false;
        // Revertir el nombre de archivo a su valor original
        this.nombreArchivoINE = this.nombreArchivoINEOriginal;
        break;
      case 'comprobante':
        this.mostrarSubirArchivoComprobante = false;
        this.mostrarBotonReemplazarComprobante = true;
        this.mostrarBotonConservarComprobante = true;
        this.mostrarBotonCancelarComprobante = false;
        // Revertir el nombre de archivo a su valor original
        this.nombreArchivoComprobante = this.nombreArchivoComprobanteOriginal;
        break;
      default:
        break;
    }
  }
  guardarActualizacion() {
    // Aquí implementar la lógica para guardar la actualización de los documentos
    console.log('Actualización guardada');
  }
}
