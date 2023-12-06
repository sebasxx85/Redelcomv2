import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit{

  variableStyle: number = 10;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ){
    
  }

  ngOnInit(): void {
   
  }

  cambiarColorBorde(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'border-color', '#008000')
    return this.variableStyle = 12
  }

}
