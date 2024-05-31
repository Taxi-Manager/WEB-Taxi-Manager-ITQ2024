import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./login-firebase";
import { collection, addDoc, Firestore } from '@angular/fire/firestore'; 
import { Injectable, inject } from '@angular/core';

Injectable()
export async function crearuser(){
  const crearfb = document.querySelector<HTMLFormElement>('#r-form');
  const titleElement = document.querySelector<HTMLDivElement>('.btn-t');
  const hoveroff = document.querySelector<HTMLDivElement>('.btn');

  if (crearfb && titleElement && hoveroff) {
    crearfb.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = crearfb['nuser'].value as string;
      const passval1 = crearfb['pass-1'].value as string;
      const passval2 = crearfb['pass-2'].value as string;

      if (passval1 === passval2) {
        const password = passval1;
        console.log(email, password);

        try {
          const userC = await createUserWithEmailAndPassword(auth, email, passval1);
          console.log(userC);
          console.log("SESION INICIADA");

          const username = email.split('@')[0];
          const userData = { email, password, username };

           // Llamar a la función para cargar los datos a Firebase con el servicio de Firestore obtenido

          titleElement.style.color = 'green';
          crearfb['nuser'].value = '';
          crearfb['pass-1'].value = '';
          crearfb['pass-2'].value = '';
          hoveroff.classList.add('hover-off');
          setTimeout(() => {
            hoveroff.classList.remove('hover-off');
            titleElement.style.color = '';
          }, 2000);
        } catch (error: any) {
          if (error.code === "auth/invalid-credential") {
            console.log("Credenciales incorrectas")
            titleElement.style.color = 'red';
          } else {
            console.log('error', error)
          }
        }
      } else {
        console.log("Las constraseñas son diferentes");
      }
    });
  } else {
    console.error("Elementos HTML no encontrados.");
  }


  
}

