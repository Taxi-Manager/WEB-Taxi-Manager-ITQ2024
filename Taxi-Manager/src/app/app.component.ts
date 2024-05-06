import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './new-user/new-user.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,NewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Taxi-Manager';
}
