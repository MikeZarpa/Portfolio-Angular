import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/mis-classes/models/educacion';
import { EdicionItem } from 'src/app/mis-classes/paraEdicion/edicion-item';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent extends EdicionItem<Educacion> implements OnInit {

  constructor() {
    super()
   }

  cambiandoCarrera(texto:string){
    this.item.carreraNombre=texto;
  }
  cambiandoLugar(texto:string){
    this.item.lugarNombre=texto;
  }
  cambiandoPeriodo(texto:string){
    this.item.periodo=texto;
  }
}
