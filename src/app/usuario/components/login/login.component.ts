import { Component, OnInit } from '@angular/core';
import { LoginUsuarioService } from '../../services/login-usuario.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginApiService } from '../../services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  //aca vamos a obtener datos api, pero lo que queremos
  //hacer luego es comparar valores form y permitir o no ingreso
  dataAPI: any = [] 

  constructor(
    private loginServ: LoginUsuarioService,
    private router: Router,
    private fb: FormBuilder,
    private loginAPI: LoginApiService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    
  }
  ngOnInit(): void {
    this.obtenerUsuariosAPI()
  }

  //retornar valores validar usuarios y password
  get Usuario() {
    // return this.inicioAdmin.controls.usuario
    return this.loginForm.get('username')?.value
  }

  get Pass() {
    //return this.inicioAdmin.controls.password
    return this.loginForm.get('password')?.value
  }


  //aca debo comprara lo ingresado en el formulario con el arreglo o api del servicio
  // manejoIngresar() {
  //   if (this.loginForm.valid) {
  //     console.log("datos validos");
  //     //  alert(this.Usuario);

  //     //Verificar que el usuario ingresado exista en el arreglo usuarios del servicio
  //     let usuarioEncontrado = this.loginServ.authenticate(this.Usuario, this.Pass)

  //     if (usuarioEncontrado) {
  //       alert("ingreso correcto");
  //       this.router.navigateByUrl('usuario/dashboard')

  //     } else {

  //       alert("ingreso Incorrecto");
  //     }

  //   }
  // }

  /* USANDO LA API Para Login */

  obtenerUsuariosAPI() {
    this.loginAPI.obtenerUsuarios().subscribe((data) => {
      console.log(data);
      
      this.dataAPI = data
    })
  }


  manejoIngresar()  {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      this.loginAPI.authenticate(username, password).subscribe(
        (response) => {
          // Manejar la respuesta exitosa (usuario autenticado)
          console.log('Autenticación exitosa', response);
        },
        (error) => {
          // Manejar el error (usuario no autenticado)
          console.error('Error de autenticación', error);
        }
      );
    }
  }








}
