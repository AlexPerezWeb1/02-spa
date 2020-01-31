import {Component} from '@angular/core';

@Component({

  selector: 'app-body',
  templateUrl: './body.component.html'
})

 export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'un gran poder es una gran responsabilidad',
    autor: 'Ven Parcker'
};
  personajes: string[] = ['capitan', 'thor', 'iroman'];


}
