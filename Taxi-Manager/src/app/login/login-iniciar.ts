// login-form.ts
import { User, UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./login-firebase";
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();
  constructor(private router: Router) {}

  handleLoginForm() {
    const iniciarfb = document.querySelector<HTMLFormElement>('#l-form');
    const titleElement = document.querySelector<HTMLDivElement>('.title');

    if (iniciarfb && titleElement) {
      iniciarfb.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = iniciarfb['l-email'].value as string;
        const password = iniciarfb['l-pass'].value as string;
        console.log(email, password);

        try {
          const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log(userCredential);
          // Aquí es cuando se inició sesión normal y se puede pasar a otra página etc.
          console.log("SESION INICIADA");
          titleElement.style.color = 'green';
          this.userSubject.next(userCredential.user);  // Emite el usuario autenticado
          this.router.navigate(['/dashboard']); // Navega a DashboardComponent
        } catch (error: any) {
          if (error.code === "auth/invalid-email") {
            // Si el correo está mal aquí se puede hacer algo más al CSS
            console.log("Correo incorrecto");
            titleElement.style.color = 'Orange';
          } else if (error.code === "auth/invalid-credential") {
            // Si la contraseña está mal aquí se puede hacer algo más al CSS
            console.log("Contraseña incorrecta");
            titleElement.style.color = 'red';
          } else {
            console.log('error', error);
          }
        }
      });
    } else {
      console.error("Elementos HTML no encontrados.");
    }
  }
}
