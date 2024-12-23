import { Component } from '@angular/core';
import { IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail, IonList } from '@ionic/angular/standalone';
import { IonSelectCustomEvent } from '@ionic/core';
import { CommonModule } from '@angular/common';
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { CirculoComponent } from "../circulo/circulo.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonList, IonContent, IonSelect, IonSelectOption, CommonModule, TrianguloComponent, CirculoComponent],
})
export class HomePage {

  figuraGeometrica: string = ""

  constructor() {}

  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.figuraGeometrica = $event.detail.value
    }

  esCirculo(){return this.figuraGeometrica == "circulo"}
  esTriangulo(){return this.figuraGeometrica == "triangulo"}
}

