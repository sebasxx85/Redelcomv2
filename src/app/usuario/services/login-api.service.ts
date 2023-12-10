import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  //consumimos la API que viene de node
  private api = 'http://localhost:3000/usuarios'


  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.api)
  }

  //funcion para permitir el ingreso  comprarar el arreglo de usaurios con los del form
  authenticate(name: string, password: string): Observable<any> {
    const body = { name, password };
    return this.http.post<any>(this.api, body)
  }


}


