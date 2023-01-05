import { Component } from '@angular/core';

@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.component.html',
  styleUrls: ['./pag2.component.css']
})
export class Pag2Component {
  experiencia = [
  {
    empresa: "Empresa 1",
    puesto: "Desarrollador web",
    anioInicio:2021,
    anioFinal:2022,
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cum vel maiores facilis ipsa assumenda. Veritatis quas, asperiores quis laudantium iste eligendi, a voluptas incidunt, dolores error eius et illo!"
  },
  {
    empresa: "Empresa 2",
    puesto: "Desarrollador web",
    anioInicio:2018,
    anioFinal:2020,
    descripcion:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias cum vel maiores facilis ipsa assumenda. Veritatis quas, asperiores quis laudantium iste eligendi, a voluptas incidunt, dolores error eius et illo!"
  }
  ];
}
