import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-acesso-funcion-registro',
  templateUrl: './acesso-funcion-registro.component.html',
  styleUrls: ['./acesso-funcion-registro.component.css']
})

export class AcessoFuncionRegistroComponent {
  registroForm: FormGroup;
  mostrarNotificacion: boolean = false; // Variable para controlar la visibilidad de la notificación

  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar) {
    this.registroForm = this.formBuilder.group({
      placa: ['', Validators.required],
      modelo: ['', Validators.required],
      numeroSerie: ['', Validators.required],
      numeroChasis: ['', Validators.required],
      tarjetaCirculacion: [''],
      polizaSeguro: [''],
      historialTenencias: [''],
      otrosDocumentos: ['']
    });
  }

  registrarVehiculo() {
    // Simular el registro del vehículo (aquí podrías llamar a tu servicio HTTP para enviar los datos al backend)
    // Después de registrar con éxito, mostrar la notificación y resetear el formulario
    this.snackBar.open('El vehículo se registró correctamente.', 'Cerrar', {
      duration: 30000 // Duración de la notificación en milisegundos
    });
    this.registroForm.reset();
    this.mostrarNotificacion = true; // Mostrar la notificación después de registrar el vehículo
    this.generarIdUnico(); // Generar un identificador único
  }
  generarIdUnico() {
    const registroIdElement = document.getElementById('registro-id');
    if (registroIdElement) {
      const idUnico = Date.now().toString(); // Genera un identificador único basado en la marca de tiempo actual
      registroIdElement.innerText = `ID del registro: ${idUnico}`; // Mostrar el ID único en un elemento HTML
    } else {
      console.error('El elemento con ID "registro-id" no se encontró en el DOM.');
    }
  }
  
  mostrarAlerta() {
    alert('El vehículo se registró correctamente.');
  }
}
