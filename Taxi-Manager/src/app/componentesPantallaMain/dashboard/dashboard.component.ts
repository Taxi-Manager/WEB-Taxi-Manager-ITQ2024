import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from '../reportes/reportes.component';
import { RouterModule } from '@angular/router';
import { Pantalla3DComponent } from '../../componentes3D/pantalla3-d/pantalla3-d.component';
import { ComponentGraficaComponent } from "../../component-grafica/component-grafica.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [CommonModule, ReportesComponent, RouterModule, Pantalla3DComponent, ComponentGraficaComponent]
})

export class DashboardComponent {
  constructor(private el:ElementRef){
  }
  ngOnInit(): void {

       let alldrpdwn = document.querySelectorAll('.dropdown-container');
       console.log(alldrpdwn, 'alldrpdwn#')
       alldrpdwn.forEach((item:any)=>{
        const a = item.parentElement?.querySelector('a:first-child');
        console.log(a, 'a#');
        a.addEventListener('click', (e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
        
        })
      });
  }

  //menu responsivo
  responsiveMenu:any;
  defaultStatus=true;
  openNav(status:any)
  {
    if(status===this.defaultStatus)
    {
      this.responsiveMenu = {
        'display':'block'
      }
      this.defaultStatus = false;
    }
    else
    {
      this.responsiveMenu = {
        'display':null
      }
      this.defaultStatus = true;

    }
    
  }
}
