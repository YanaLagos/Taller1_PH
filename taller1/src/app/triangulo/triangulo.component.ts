import { Component, OnInit } from '@angular/core';
import { IonText, IonContent, IonItem, IonInput, IonButton, IonList, IonCardTitle, IonCard, IonCardHeader, IonCardContent } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Triangulo } from '../modelo/figuraGeometrica';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonCard, IonCardTitle, IonText, IonButton,  FormsModule, IonInput, IonContent, IonList, IonItem, CommonModule],
})
export class TrianguloComponent  implements OnInit {

  txtLadoA: string = "";
  txtLadoB: string = "";
  txtLadoC: string = "";
  perimetro = 0;
  triangulo = new Triangulo ("triangulo", 0, 0, 0)

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {

    this.triangulo.ladoA = parseInt(this.txtLadoA);
    this.triangulo.ladoB = parseInt(this.txtLadoB);
    this.triangulo.ladoC = parseInt(this.txtLadoC);

    this.perimetro = this.triangulo.calcularPerimetro();
  }

  perimetroValido(){
    return !isNaN(this.perimetro)
  }
}
