import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-programar-mantenimiento',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './programar-mantenimiento.component.html',
  styleUrls: ['./programar-mantenimiento.component.css']
})
export class ProgramarMantenimientoComponent implements OnInit {
  mantenimientoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.mantenimientoForm = this.fb.group({
      fechaMantenimiento: ['', Validators.required],
      kilometraje: ['', [Validators.required, Validators.min(0)]],
      refacciones: this.fb.array([
        this.fb.group({
          nombre: ['Extintor', Validators.required],
          verificado: [false]
        }),
        this.fb.group({
          nombre: ['Botiquín', Validators.required],
          verificado: [false]
        }),
        this.fb.group({
          nombre: ['Herramientas', Validators.required],
          verificado: [false]
        })
      ])
    });
  }

  ngOnInit(): void {}

  get refacciones(): FormArray {
    return this.mantenimientoForm.get('refacciones') as FormArray;
  }

  onSubmit(): void {
    if (this.mantenimientoForm.valid) {
      console.log(this.mantenimientoForm.value);
      // Aquí puedes agregar la lógica para manejar el envío del formulario
    }
  }

  calculateProgress(): number {
    const fechaMantenimiento = new Date(this.mantenimientoForm.get('fechaMantenimiento')?.value);
    const hoy = new Date();

    // Calculamos la diferencia en días entre hoy y la fecha de mantenimiento
    const diasRestantes = Math.ceil((fechaMantenimiento.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    // Enviamos notificación cuando falten 80, 85 y 90 días para el próximo mantenimiento
    if (diasRestantes === 80 || diasRestantes === 85 || diasRestantes === 90) {
      this.enviarNotificacion(`Faltan ${diasRestantes} días para el próximo mantenimiento`);
  }

    // Si la fecha de mantenimiento es hoy o en el pasado, la barra se llenará gradualmente hasta llegar a 90 días
    if (diasRestantes <= 0) {
        return Math.min((-diasRestantes / 90) * 100, 100);
    }

    // Si la fecha de mantenimiento es más de 90 días anterior a hoy, la barra estará llena (100% de progreso)
    if (diasRestantes >= 90) {
        return 100;
    }

    // Si faltan menos de 90 días para la fecha de mantenimiento, calculamos el progreso en función de los días restantes
    return 0;
}

enviarNotificacion(mensaje: string) {
  // Lógica para enviar la notificación, por ejemplo, mediante un servicio de notificaciones
  console.log('Notificación enviada:', mensaje);
}
}
