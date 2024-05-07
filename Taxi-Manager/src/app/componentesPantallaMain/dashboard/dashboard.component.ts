import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit{
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
