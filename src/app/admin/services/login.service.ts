import { Injectable } from '@angular/core';
import { LoginRequest } from '../Models/LoginRequest';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = "././assets/login.json";

  //creando el BehaviorSubject para la comunicacion entre los componentes del login
  // x defecto el login del usuario es false como valor inicial
  UserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  //creando un segundo BehaviorSubject para los datos del usuario obligatorios de User id y email
  UserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0, email:''})


  private credenciales = [
    { administrador: 'admin@gmail.com', password: '12345' },
    { administrador: 'admin2@gmail.com', password: '12345' },
    { administrador: 'seba@gmail.com', password: '12345' },
    // Agrega más usuarios según sea necesario
  ];

  constructor(private http: HttpClient) { }

    //Esta autenticacion  es usando F Reactivos con el arreglo credenciales
    authenticate(username: any, password: any): boolean {
      const usuarioEncontrado = this.credenciales.find(
        cred => cred.administrador === username && cred.password === password);
      
      return !!usuarioEncontrado;
    }

  loginAdm(credentials: LoginRequest):Observable<User> {
   // console.log(credentials);

   //usamos pipe y tap para usar next y enviar un estado tanto a UserData como UserLoginOn
    return this.http.get<User>(this.url).pipe(
      tap((userData: User) => {
        this.UserData.next(userData);
        this.UserLoginOn.next(true);
      }),
      catchError(this.handleError)
    )

  }

  //mmanejo de errores usando handleError
  private handleError(error: HttpErrorResponse){
    if (error.status===0) {   
      console.error("Se ha producido un error ", error.error);
      
    } else {
      console.error("El servidor retorno el codigo de estado", error.status, error.error)
    }
    return throwError(
        () => new Error('Hubo algun fallo, Intente nuevamente')
    )}


    //En esta parte transfromamos los BehaviorSubject como observables para que los compoenntes se puedan 
    //subsribir a ellos y obtener la actualizacion de los datos de login y data 
    
    get MiuserData():Observable<User>{
      return this.UserData.asObservable();
    }

    get MiUserLoginOn():Observable<boolean>{
      return this.UserLoginOn.asObservable()
    }

}
