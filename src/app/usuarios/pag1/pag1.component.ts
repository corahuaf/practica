import { Component } from '@angular/core';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.component.html',
  styleUrls: ['./pag1.component.css']
})
export class Pag1Component {
  boton_pulsado: boolean = false;

funcion(){
   this.boton_pulsado = !this.boton_pulsado;
}
}
