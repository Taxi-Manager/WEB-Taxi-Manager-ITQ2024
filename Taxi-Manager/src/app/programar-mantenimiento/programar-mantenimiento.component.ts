import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Importa AngularFireDatabase
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-programar-mantenimiento',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf],
  templateUrl: './programar-mantenimiento.component.html',
  styleUrls: ['./programar-mantenimiento.component.css']
})
export class ProgramarMantenimientoComponent implements OnInit {
  mantenimientoForm: FormGroup;
  vehiculos: string[] = []; // Array para almacenar los valores de tzvehiculo cargados desde Firebase
  proximaFechaMantenimiento: string | null = null; // Variable para almacenar la próxima fecha de mantenimiento
  mostrarBarraProgreso: boolean = true; // Variable para controlar la visibilidad de la barra de progreso

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) { // Inyecta AngularFireDatabase
    this.mantenimientoForm = this.fb.group({
      vehiculo: ['', Validators.required],
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
      ]),
    });
  }

  ngOnInit(): void {
    // Cargar vehículos desde la tabla fallas en Firebase
    this.db.list('fallas').snapshotChanges().subscribe((data: any[]) => { // Explicitly type 'data' as an array of 'any' type
      this.vehiculos = data.map(item => item.payload.val().tzvehiculo);
    });

    // Suscribirse a los cambios en el campo fechaMantenimiento para calcular la próxima fecha de mantenimiento
    this.mantenimientoForm.get('fechaMantenimiento')?.valueChanges.subscribe(value => {
      this.calcularProximaFechaMantenimiento(value);
    });
  }

  get refacciones(): FormArray {
    return this.mantenimientoForm.get('refacciones') as FormArray;
  }

  onSubmit(): void {
    if (this.mantenimientoForm.valid) {
      const formData = this.mantenimientoForm.value;
      this.calcularProximaFechaMantenimiento(formData.fechaMantenimiento);

      // Insertar datos en Firebase
      this.db.list('mantenimientos').push({
        vehiculo: formData.vehiculo,
        fechaMantenimiento: formData.fechaMantenimiento,
        kilometraje: formData.kilometraje,
        refacciones: formData.refacciones,
        proximaFechaMantenimiento: this.proximaFechaMantenimiento
      })
        .then(() => {
          console.log('Mantenimiento registrado con éxito');
          console.log('Proximo mantenimiento:', this.proximaFechaMantenimiento);
          this.mantenimientoForm.reset();
          this.proximaFechaMantenimiento = null;
          this.mostrarBarraProgreso = false; // Ocultar la barra de progreso una vez que se han guardado los datos


        })
        .catch(error => {
          console.error('Error al registrar el mantenimiento', error);
        });
    }
  }

  calculateProgress(): number {
    const fechaMantenimiento = new Date(this.mantenimientoForm.get('fechaMantenimiento')?.value);
    const hoy = new Date();

    // Calculamos la diferencia en días entre hoy y la fecha de mantenimiento
    const diasRestantes = Math.ceil((fechaMantenimiento.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    // Enviamos notificación cuando falten 80, 85 y 90 días para el próximo mantenimiento
    if (diasRestantes === 1 || diasRestantes === 5 || diasRestantes === 10) {
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

  calcularProximaFechaMantenimiento(fechaMantenimiento: string) {
    const fecha = new Date(fechaMantenimiento);
    fecha.setDate(fecha.getDate() + 90); // Sumar 90 días a la fecha de mantenimiento
    const hoy = new Date();
    const diasRestantes = Math.ceil((fecha.getTime() - hoy.getTime()) / (1000 * 60 * 60 * 24));

    if (diasRestantes < 0) {
      this.proximaFechaMantenimiento = 'Mantenimiento urgente';
    } else {
      this.proximaFechaMantenimiento = fecha.toISOString().split('T')[0]; // Formatear la fecha a 'YYYY-MM-DD'
    }
  }

  enviarNotificacion(mensaje: string) {
    // Lógica para enviar la notificación, por ejemplo, mediante un servicio de notificaciones
    console.log('Notificación enviada:', mensaje);
  }
}
