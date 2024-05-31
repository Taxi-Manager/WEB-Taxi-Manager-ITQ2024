import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';

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

  ngOnInit() {
    this.getAllUsers(); 
  }

  async getAllUsers() {
    try {
      const usersCollection = collection(this.firestore, 'usuarios'); 
      const querySnapshot = await getDocs(usersCollection);

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        this.usersData.push(userData);
        console.log(doc.id, ' => ', userData);
      });
    } catch (error) {
      console.error('Error al recuperar los datos de los usuarios: ', error);
    }
  }
}