import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginRequest } from '../../Models/LoginRequest';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UserLogin: boolean = false;
  color: string = 'rojo';
 

  inicioAdmin = this.formBuilder.group({
    usuario: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(5)]]
});

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private loginServ: LoginService

  ) { }

  ngOnInit() {}
 
//Retornar errores formulario
  get Usuario(){
    return this.inicioAdmin.controls.usuario
    //return this.inicioAdmin.get('usuario')?.value
  }

  get Pass(){
    return this.inicioAdmin.controls.password
    //return this.inicioAdmin.get('password')?.value
  }

  //retornar valores validar usuarios
  get Usuario2(){
   // return this.inicioAdmin.controls.usuario
      return this.inicioAdmin.get('usuario')?.value
  }

  get Pass2(){
    //return this.inicioAdmin.controls.password
      return this.inicioAdmin.get('password')?.value
  }


 //Aca tengo que comunicar con controlador nav para que me muestre la barra usuario, usar rxjs
  loginAdm(){
    
    if (this.inicioAdmin.valid) {
       console.log("datos validos");
        // alert(this.Usuario);
        // alert(this.Usuario2);

       /* 2 maneras de hacer login. 1 con el authenticate() y otra con login() */ 

      //Verificar que el usuario ingresado exista en el arreglo del servicio
      const usuarioEncontrado = this.loginServ.authenticate(this.Usuario2, this.Pass2)

      //usando login() para verificar el usaurio que usa la interface loginRequest
      this.loginServ.loginAdm(this.inicioAdmin.value as LoginRequest).subscribe({
        
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.log(errorData);
        },
        complete: () => {
          console.info("Login completo")
        }
      })

      if (usuarioEncontrado) {
        alert("ingreso correcto");
        this.router.navigateByUrl('admin/dashboard')

         //Resetear datos formulario
        this.inicioAdmin.reset()

      } else {
        this.inicioAdmin.markAllAsTouched();
        alert("ingreso Incorrecto");
      }
      
    }
  }

}

