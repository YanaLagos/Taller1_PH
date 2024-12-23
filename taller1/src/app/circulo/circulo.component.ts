import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonContent, IonInput, IonButton, IonText, IonCardTitle, IonCardContent, IonCardHeader, IonCard } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Circulo } from '../modelo/figuraGeometrica';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonList, IonCardContent, IonCardTitle, IonText, IonButton,  FormsModule, IonInput, IonContent, IonItem, CommonModule],
})
export class CirculoComponent  implements OnInit {

  perimetro = 0;
  circulo = new Circulo ("circulo", 0)
  txtRadio: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    this.circulo.radio =  parseInt(this.txtRadio)
    this.perimetro = this.circulo.calcularPerimetro()
    }

  perimetroValido(){
    return !isNaN(this.perimetro)
  }
}
