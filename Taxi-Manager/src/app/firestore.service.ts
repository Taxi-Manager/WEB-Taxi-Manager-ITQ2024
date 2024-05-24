import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getItems(): Observable<any[]> {
    return this.firestore.collection('items').valueChanges();
  }

  addItem(item: any): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection('items2').doc(id).set(item);
  }
}
