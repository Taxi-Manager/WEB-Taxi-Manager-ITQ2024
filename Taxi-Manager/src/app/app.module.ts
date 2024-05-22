import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp } from "firebase/app";

// Importa tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB1VPhVTlowfkA9-3BXZXfXH9t_5WzaBBo",
  authDomain: "topicos-7474e.firebaseapp.com",
  databaseURL: "https://topicos-7474e-default-rtdb.firebaseio.com",
  projectId: "topicos-7474e",
  storageBucket: "topicos-7474e.appspot.com",
  messagingSenderId: "33809695042",
  appId: "1:33809695042:web:0689cc8f53c10c7efa88db"
};

// Inicializa la aplicación de Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig), // Inicializa Firebase con la configuración
    AngularFireDatabaseModule // Importa el módulo de base de datos
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
