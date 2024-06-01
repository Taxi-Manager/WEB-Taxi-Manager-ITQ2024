import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';

@Component({
  selector: 'app-userexistente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userexistente.component.html',
  styleUrl: './userexistente.component.css'
})
export class UserexistenteComponent implements OnInit {
  private firestore: Firestore = inject(Firestore);
  usersData: any[] = [];
  isLoading: boolean = false;
  completo: boolean = false;

  ngOnInit() {
    this.getAllUsers();
  }

  async getAllUsers() {
    try {
      const usersCollection = collection(this.firestore, 'usuarios');
      const querySnapshot = await getDocs(usersCollection);
      this.isLoading = true; // Cuando se completó la carga
      
setTimeout(()=>{
  this.completo = true;
},100)

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        userData['id'] = doc.id; // Guarda el ID del documento
        this.usersData.push(userData);
        console.log(doc.id, ' => ', userData);
      });      

    } catch (error) {
      console.error('Error al recuperar los datos de los usuarios: ', error);
    }
  }

  async deleteUser(userId: string) {
    try {
      
      const userDocRef = doc(this.firestore, 'usuarios', userId);
      await deleteDoc(userDocRef);
      this.usersData = this.usersData.filter(user => user.id !== userId);
      console.log('Usuario eliminado exitosamente');
    } catch (error) {
      console.error('Error al eliminar el usuario: ', error);
    }
  }
  updateAdminPrivi(event: Event, user: any) {
    const checkbox = event.target as HTMLInputElement;
    user.adminprivi = checkbox.checked;
    console.log(user.adminprivi);
  }
  async updateUser(user: any) {
    try {
      const userDocRef = doc(this.firestore, 'usuarios', user.id);
      await updateDoc(userDocRef, { adminprivi: user.adminprivi });
      console.log(`Usuario ${user.username} actualizado: adminprivi = ${user.adminprivi}`);
    } catch (error) {
      console.error('Error al actualizar el adminprivi del usuario: ', error);
    }
  }
}