import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent{

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  color: string = 'green';
  mensaje: string = 'Texto fijo mensaje';

  constructor(private fb: FormBuilder) { }

  tieneError(campo: string): boolean{
    return this.miFormulario.get(campo)?.invalid || false;
  }

  setMensaje(){
    this.mensaje = Math.random().toString();
  }

  setColor(){
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random()*16|0).toString(16));
    this.color = color;
    
  }

}
