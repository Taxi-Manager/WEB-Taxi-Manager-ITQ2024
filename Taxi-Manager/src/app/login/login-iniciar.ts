// login-form.ts
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./login-firebase";

export function handleLoginForm() {
    
  const iniciarfb = document.querySelector<HTMLFormElement>('#l-form');
  const titleElement = document.querySelector<HTMLDivElement>('.title');

  if (iniciarfb && titleElement) {
    iniciarfb.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = iniciarfb['l-email'].value as string;
      const password = iniciarfb['l-pass'].value as string;
      console.log(email, password);

      try {
        const userC = await signInWithEmailAndPassword(auth, email, password);
        console.log(userC);
        //aqui es cuando se inició sesion normal y se puede pasar a otra pagina etc.
        console.log("SESION INICIADA");
        titleElement.style.color = 'green';
      } catch (error: any) {
        if (error.code === "auth/invalid-email") {
            //si el correo está mal aqui se puede hacer algo más al css
            console.log("Correo incorrecto");
            titleElement.style.color = 'Orange';
          }else if (error.code === "auth/invalid-credential") {
            //si la contraseña está mal aqui se puede hacer algo más al css
            console.log("Contraseña incorrecta");
            titleElement.style.color = 'red';
          } 
          else {
          console.log('error', error);
        }
      }
    });
  } else {
    console.error("Elementos HTML no encontrados.");
  }
}
