import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';
import { EdicionItem } from 'src/app/mis-classes/paraEdicion/edicion-item';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent extends EdicionItem<Experiencia> implements OnInit {
  constructor() {
    super()
   }

  cambiandoLugar(texto:string){
    this.item.lugarNombre=texto;
  }
  cambiandoDescripcion(texto:string){
    this.item.descripcion=texto;
  }
  cambiandoPeriodo(texto:string){
    this.item.periodo=texto;
  }
  cambiandoPuesto(texto:string){
    this.item.puestoNombre=texto;
  }
}
