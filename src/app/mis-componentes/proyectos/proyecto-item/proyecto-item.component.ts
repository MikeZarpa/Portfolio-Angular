import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';
import { EdicionItem } from 'src/app/mis-classes/paraEdicion/edicion-item';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent extends EdicionItem<Proyecto> implements OnInit {

  constructor() {
    super()
   }
  cambiandoNombre(texto:string){
    this.item.nombre=texto;
  }
  cambiandoDescripcion(texto:string){
    this.item.descripcion=texto;
  }
  cambiandoFecha(texto:string){
    this.item.fecha=texto;
  }
  cambiandoLink(texto:string){
    this.item.link=texto;
  }  
}
