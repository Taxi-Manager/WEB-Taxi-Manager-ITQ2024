import { Component, OnInit, inject } from '@angular/core';
import { crearuser } from './crearfb';
import { UserexistenteComponent } from "../userexistente/userexistente.component";
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./login-firebase";
@Component({
    selector: 'app-new-user',
    standalone: true,
    templateUrl: './new-user.component.html',
    styleUrl: './new-user.component.css',
    imports: [UserexistenteComponent,ReactiveFormsModule,HttpClientModule]
})
export class NewUserComponent  implements OnInit{
  data: any = {};
  form: FormGroup;
  private firestore: Firestore = inject(Firestore); // Inyecta Firestore

  constructor(private httpClient: HttpClient, private fb: FormBuilder) {
    console.log('NewUserComponent initialized');
    this.form = this.fb.group({
      nuser: [''],
      pass: [''],
      pass2: [''],
      admin: [false]

    });
    document.addEventListener('DOMContentLoaded', () => {
      //crearuser();   
     });
  }
//extras
ngOnInit(): void {}

  async onSubmit() {
  const email = this.form.get('nuser')?.value; // Obtiene el valor del CURP del formulario
  const pass = this.form.get('pass')?.value;
  const username = email.split('@')[0];
  const adminprivi = this.form.get('admin')?.value;
  const userData = { email, pass, username,adminprivi };
  this.data = userData;
  console.log(this.data);

  this.uploadToFirebase(this.data);
  try {
    const userC = await createUserWithEmailAndPassword(auth, email, pass);
    this.form.reset('nuser');
  
  }
    catch (error: any) {
      if (error.code === "auth/invalid-credential") {
        console.log("Credenciales incorrectas")
      } else {
        console.log('error', error)
      }
    }
}
//upload
uploadToFirebase(solicitante: any) {
  const solicitantesCollection = collection(this.firestore, 'usuarios');
  addDoc(solicitantesCollection, solicitante)
    .then(() => {
      console.log('Datos subidos a Firebase exitosamente');
    })
    .catch((error) => {
      console.error('Error al subir los datos a Firebase', error);
    });
}

}
