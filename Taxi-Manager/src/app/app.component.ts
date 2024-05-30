import { Component, ElementRef, OnInit, input } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CrearConductorComponent } from './compGestionConductores/crear-conductor/crear-conductor.component';
import { EditDeleteUpdateComponent } from './compGestionConductores/edit-delete-update/edit-delete-update.component';
import { VerificarDocumentosComponent } from './compGestionConductores/verificar-documentos/verificar-documentos.component';
import { SubirDocumentosComponent } from './compGestionConductores/subir-documentos/subir-documentos.component';
import { ConsultarConductorComponent } from './compGestionConductores/consultar-conductor/consultar-conductor.component';
import { Pantalla3DComponent } from './componentes3D/pantalla3-d/pantalla3-d.component';
import { DashboardComponent } from './componentesPantallaMain/dashboard/dashboard.component';
import { ReportesComponent } from "./componentesPantallaMain/reportes/reportes.component";
import { CommonModule } from '@angular/common';
import { DropdownService } from './dropdown.service';
import { GarajeComponent } from './componentesGaraje/garaje/garaje.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,RouterModule, RouterOutlet,CrearConductorComponent,
     EditDeleteUpdateComponent, VerificarDocumentosComponent,
    SubirDocumentosComponent, ConsultarConductorComponent, 
    Pantalla3DComponent, DashboardComponent, NewUserComponent,FormsModule,GarajeComponent, 
    LoginComponent, ReportesComponent,ReactiveFormsModule]
})
export class AppComponent implements OnInit {
  showNavbar = true;  // Inicialmente, asumimos que la barra de navegación debe mostrarse
title = "Taxi Manager";
  constructor(private el: ElementRef, private router: Router,private dropdownService: DropdownService) {

    
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
  ngOnInit(): void {
    this.listenToRouteChanges();
    this.dropdownService.initializeDropdowns();
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
    
  }logout() {
    this.router.navigate(['/login']).then(() => {
      this.showNavbar = false;  
    });
  }
}
