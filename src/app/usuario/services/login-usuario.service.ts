import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUsuarioService {

 /* Este login service debe recibir los usuarios desde localhost comparar con lo que
     se envia x fromulario y si esta registrado dejar entrar y mostrar botones de dashboard 
     sacar ingresar y demas caracteristica */
     
     //Este arreglo tiene los mismos parametros que el backend de node
     private usuariosLog = [
      { id: 1, name: 'usuario1', lastname: 'apellido1', email: 'usuario1@gmail.com', password: '12345' },
      { id: 2, name: 'usuario2', lastname: 'apellido2', email: 'usuario2@gmail.com', password: '12345' },
      { id: 3, name: 'usuario3', lastname: 'apellido3', email: 'usuario3@gmail.com', password: '12345' },
      { id: 4, name: 'usuario4', lastname: 'apellido4', email: 'usuario4@gmail.com', password: '12345' },
      
      // Agrega más usuarios según sea necesario, SI pongo los numeros sin comillas me tira error la comparacion
    ];

  //creando un subject
  private usuariosSubject!: BehaviorSubject<any[]>    

  constructor() { 
    this.usuariosSubject = new BehaviorSubject<any[]>(this.usuariosLog)  
  }

  isLoggged(): boolean {
    return localStorage.getItem('token')? true: false;
  }

  //obtener todos los usuarios para el dashboard admin
  get usuarios(): Observable<any[]>{
    return this.usuariosSubject.asObservable()
  }

  //agregar un usuario para el componente registro 
  agregarUsuario(usuario: any){
    //agregamos el usuario al arreglo
    this.usuariosLog.push(usuario)
    //actualizamos el arreglo
    this.usuariosSubject.next(this.usuariosLog)

  } 

  
 //funcion para permitir el ingreso  comprarar el arreglo de usaurios con los del form
 authenticate(usuario: any, password: any): boolean {
  const usuarioEncontrado = this.usuariosLog.find(
    cred => cred.name === usuario && cred.password === password);
  
  return !!usuarioEncontrado;
}


}
