import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habilidad, IHabilidad } from 'src/app/mis-classes/models/habilidad';
import { EdicionItem } from 'src/app/mis-classes/paraEdicion/edicion-item';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent extends EdicionItem<Habilidad> implements OnInit {

  
  constructor() {
    super()
   }

  //cambiar cosas
  cambiandoNombre(texto:string){
    this.item.nombre=texto
  }
  cambiandoPorcentaje(texto:string){
    this.item.porcentaje=parseInt(texto);
  }
  styleBarProgress(){
    let styleBarProgress = {
      'width': this.item.porcentaje+"%"
    };
    return styleBarProgress;
  }
}
