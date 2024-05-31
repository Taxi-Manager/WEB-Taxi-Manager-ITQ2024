import { Injectable } from '@angular/core';
import { Auth, getAuth } from '@angular/fire/auth';
import { initializeApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private auth: Auth;

  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    this.auth = getAuth(app);
  }

  async listAllUsers(nextPageToken?: string): Promise<any[]> {
    // Aquí necesitamos usar el Firebase Admin SDK o una llamada segura desde el backend
    // Lo estamos mostrando aquí para fines educativos
    const listUsersResult = await this.auth.listUsers(1000, nextPageToken);
    const users = listUsersResult.users;
    
    if (listUsersResult.pageToken) {
      const nextUsers = await this.listAllUsers(listUsersResult.pageToken);
      users.push(...nextUsers);
    }
    
    return users;
  }
}
