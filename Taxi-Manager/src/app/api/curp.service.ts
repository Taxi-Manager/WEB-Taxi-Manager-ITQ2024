import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurpService {

  private apiUrl = 'URL_DE_LA_API'; // Reemplaza esto con la URL de la API CURP

  constructor(private http: HttpClient) { }

  obtenerCurp(curp: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${curp}`);
  }
}
