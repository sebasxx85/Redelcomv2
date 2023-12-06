import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {
  private urlAPI = 'http://192.168.1.91:8800';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.urlAPI, { responseType: 'text' });

  }

  getData2(): Observable<any> {
    return this.http.get(this.urlAPI + '/test', { responseType: 'text' });

  }

}
