import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habilidad, IHabilidad } from 'src/app/mis-classes/models/habilidad';
import { EdicionItem } from 'src/app/mis-classes/paraEdicion/edicion-item';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent extends EdicionItem<Habilidad> implements OnInit {

  tipoProvicional:string="Soft";
  constructor() {
    super()
   }
   override ngOnInit(): void {
     super.ngOnInit()
     //Quita la bandera que se pone al guardar una habilidad nueva.
     if(this.item.id==-1) this.item.id = null;
     this.tipoProvicional=this.item.tipo;
   }

  //cambiar cosas
  cambiandoNombre(texto:string){
    this.item.nombre=texto
  }
  cambiandoPorcentaje(texto:string){
    this.item.porcentaje=parseInt(texto);
  }
  cambiandoTipo(texto:string){
    this.tipoProvicional=texto;
  }
  override guardarCambios(): void {
    //Si cambia de tipo, se moverá de lista.
    if(this.item.tipo!=this.tipoProvicional){
      this.item.tipo=this.tipoProvicional;
      //De ser un item nuevo, no tendrá id, por lo que para evitar que entre en modo edición al cambiar de grupo, le damos una id falsa, que se quita inmediatamente en el ngOnInit al cambiar de grupo.
      if (this.item.id==null) this.item.id=-1
    }
    super.guardarCambios();
  }
  styleBarProgress(){
    let styleBarProgress = {
      'width': this.item.porcentaje+"%"
    };
    return styleBarProgress;
  }
}
