import { Component } from '@angular/core';
import { Pantalla3DComponent } from '../../componentes3D/pantalla3-d/pantalla3-d.component';

@Component({
  selector: 'app-garaje',
  standalone: true,
  imports: [Pantalla3DComponent],
  templateUrl: './garaje.component.html',
  styleUrl: './garaje.component.css'
})
export class GarajeComponent {

}
