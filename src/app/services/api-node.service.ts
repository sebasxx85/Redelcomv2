import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrordialogComponent } from '../shared/components/errordialog/errordialog.component';


@Injectable({
  providedIn: 'root'
})
export class ApiNodeService {
  private urlAPI = 'http://192.168.1.91:8800';

  constructor( 
    private http: HttpClient,
    public dialog: MatDialog
  ) { }

  getData(): Observable<any> {
    return this.http.get(this.urlAPI, { responseType: 'text' })
        .pipe(
            catchError(error => {
                // Abre el modal con el mensaje de error.
                this.dialog.open(ErrordialogComponent, {
                    width: '400px',
                    data: { message: 'Hubo un error' }
                });

                // Devuelve un Observable vacío para evitar la propagación del error.
                return of(null);
            })
        );
}

  getData2(): Observable<any> {
    return this.http.get(this.urlAPI + '/test', { responseType: 'text' });

  }

}
