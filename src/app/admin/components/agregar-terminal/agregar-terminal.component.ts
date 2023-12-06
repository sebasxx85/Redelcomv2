import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-terminal',
  templateUrl: './agregar-terminal.component.html',
  styleUrls: ['./agregar-terminal.component.css']
})
export class AgregarTerminalComponent {

  agregarTerminal!: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder
    )
    {
      this.agregarTerminal = this.formBuilder.group({
        id: ['', Validators.required, Validators.maxLength(3)],
        producto: ['', Validators.required],
        categoria: ['', Validators.required]
      })
    }

  agregar(){

  }

}
