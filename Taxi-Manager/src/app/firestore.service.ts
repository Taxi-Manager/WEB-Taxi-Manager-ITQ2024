import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  // Crear una nueva "tabla" (colección) y agregar un documento
  createDocument(collection: string, data: any) {
    return this.firestore.collection(collection).add(data);
  }

  // Leer documentos de una "tabla" (colección)
  getDocuments(collection: string) {
    return this.firestore.collection(collection).snapshotChanges();
  }

  // Actualizar un documento en una "tabla" (colección)
  updateDocument(collection: string, documentId: string, data: any) {
    return this.firestore.collection(collection).doc(documentId).update(data);
  }

  // Eliminar un documento de una "tabla" (colección)
  deleteDocument(collection: string, documentId: string) {
    return this.firestore.collection(collection).doc(documentId).delete();
  }}
