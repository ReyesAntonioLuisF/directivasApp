import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje:  string = 'Este campo es requerido'

  @Input()set  color (valor: string){
    this._color = valor;
    this.setColor();
  }

  //@Input() mensaje: string = 'Este campo es requerido';

  @Input() set mensaje (valor: string){
    this._mensaje = valor;
    this.setMensaje();

  }

  @Input() set valido ( valor: boolean) {
    valor ? this.htmlElement.nativeElement.classList.add('hidden') :
            this.htmlElement.nativeElement.classList.remove('hidden');
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
   }

 /* ngOnChanges(changes: SimpleChanges): void {
    if(changes['mensaje']){
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if(changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color= color;
    }

    console.log(changes);
  }*/


  ngOnInit(): void {
    this.setStyle();
    this.setColor();
    this.setMensaje();
  }

  setStyle(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(){
    this.htmlElement.nativeElement.style.color = this._color
    
  }

  setMensaje(){
    this.htmlElement.nativeElement.innerText = this._mensaje
  }

}
