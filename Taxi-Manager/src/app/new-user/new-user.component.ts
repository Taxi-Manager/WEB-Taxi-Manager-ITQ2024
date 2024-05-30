import { Component } from '@angular/core';
import { crearuser } from './crearfb';
import { UserexistenteComponent } from "../userexistente/userexistente.component";

@Component({
    selector: 'app-new-user',
    standalone: true,
    templateUrl: './new-user.component.html',
    styleUrl: './new-user.component.css',
    imports: [UserexistenteComponent]
})
export class NewUserComponent {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      crearuser();    });
  }
}
