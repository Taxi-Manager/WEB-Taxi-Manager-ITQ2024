import { Component, ElementRef, OnInit, inject, input } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './login/login-iniciar';
import { CrearConductorComponent } from './compGestionConductores/crear-conductor/crear-conductor.component';
import { EditDeleteUpdateComponent } from './compGestionConductores/edit-delete-update/edit-delete-update.component';
import { VerificarDocumentosComponent } from './compGestionConductores/verificar-documentos/verificar-documentos.component';
import { SubirDocumentosComponent } from './compGestionConductores/subir-documentos/subir-documentos.component';
import { ConsultarConductorComponent } from './compGestionConductores/consultar-conductor/consultar-conductor.component';
import { Pantalla3DComponent } from './componentes3D/pantalla3-d/pantalla3-d.component';
import { DashboardComponent } from './componentesPantallaMain/dashboard/dashboard.component';
import { ReportesComponent } from "./componentesPantallaMain/reportes/reportes.component";
import { CommonModule } from '@angular/common';
import { GarajeComponent } from './componentesGaraje/garaje/garaje.component';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { ConsultarMantenimientoComponent } from './consultar-mantenimiento/consultar-mantenimiento.component';
import { ConsultarFallasComponent } from './consultar-fallas/consultar-fallas.component';
import { CrearFallasComponent } from './crear-fallas/crear-fallas.component';
import { ProgramarMantenimientoComponent } from './programar-mantenimiento/programar-mantenimiento.component';
import { ComponentGraficaComponent } from './component-grafica/component-grafica.component';
import { Pantalla3DTaxiScanComponent } from './componentes3D/pantalla3-d-taxi-scan/pantalla3-d-taxi-scan.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterModule, RouterOutlet, CrearConductorComponent,
        EditDeleteUpdateComponent, VerificarDocumentosComponent,
        SubirDocumentosComponent, ConsultarConductorComponent,
        Pantalla3DComponent, DashboardComponent, FormsModule, GarajeComponent,
        LoginComponent, ReportesComponent, ReactiveFormsModule, NewUserComponent,
        ConsultarMantenimientoComponent, ConsultarFallasComponent, CrearFallasComponent,
      ProgramarMantenimientoComponent,ComponentGraficaComponent,Pantalla3DTaxiScanComponent]
})
export class AppComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  email: string = '';
  adminPriviLetter: string = 'A';
  showNavbar = true;  // Inicialmente, asumimos que la barra de navegación debe mostrarse
title = "Taxi Manager";
  constructor(private el: ElementRef, private router: Router,private authService: AuthService) {

    
    // Nos suscribimos a los eventos de navegación para actualizar el estado de la barra de navegación
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showNavbar = event.url !== '/login';
    });
  }

  listenToRouteChanges(): void {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showNavbar = event.url !== '/login';
    });
  }
  ngOnInit() {this.logout();
    this.authService.user$.subscribe(user => {
      if (user) {
        this.showNavbar = true;
        if (user.email) {  
          this.checkAdminPrivi(user.email);
        }
      } else {
        this.showNavbar = false;
      }
    });
  }

initializeDropdowns(): void {
  const dropdowns = this.el.nativeElement.querySelectorAll('.dropdown-container');
  dropdowns.forEach((dropdown: HTMLElement) => {
    const toggle = dropdown.parentElement?.querySelector('a');
    if (toggle) {
      toggle.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        dropdown.classList.toggle('show');
      });
    }
  });
}
  //menu responsivo
  responsiveMenu: any;
  defaultStatus = true;
  openNav(status: any) {
    if (status === this.defaultStatus) {
      this.responsiveMenu = {
        'display': 'block'
      }
      this.defaultStatus = false;
    } else {
      this.responsiveMenu = {
        'display': null
      }
      this.defaultStatus = true;
    }
    
  }
  
  //checar privilegios
  async checkAdminPrivi(email: string) {
    try {
      const usersCollection = collection(this.firestore, 'usuarios');
      const q = query(usersCollection, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        this.adminPriviLetter = userData['adminprivi'] ? 'S' : 'A';
      });
    } catch (error) {
      console.error('Error al recuperar los datos del usuario: ', error);
    }
  }


  //cerrar sesion
  logout() {
    this.router.navigate(['/login']).then(() => {
      this.showNavbar = false;  
    });
  }

  //privilegios admin
  preventClick(event: MouseEvent, isDisabled: boolean) {
    if (isDisabled) {
      event.preventDefault();
    }
  }
}
