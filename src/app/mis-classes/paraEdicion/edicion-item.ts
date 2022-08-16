import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ComponentItem } from "../models/component-item";

@Component({
    selector: 'app-EdicionItem',
    template: `<p>EdicionItem works!</p>`,    
    styles: []
  })

/* Cada componenteItem se carga con información de una clase, esa información se almacenará en la variable "item" que será de la clase que necesite dicho componente (clase "t").

Los eventos save y autoDelete envian la información del componente, envian el item, por lo que ambos emiten la clase "t" de "item".

Esta clase está pensada para usarse en interacción con un componente padre de la clase ControlDeEdicion.
*/



export class EdicionItem<t extends ComponentItem<t>> {

    @Input() item!:t;
    @Input() modoEdicion:boolean=false;
    @Output() save = new EventEmitter<t>()
    @Output() delete = new EventEmitter<number|null>()
    @Output() autoDelete = new EventEmitter<t>()

    itemTemp!:t;
    editando:boolean=false;
    
  
    comenzarAEditar(){
      this.itemTemp.cambiarValores(this.item);
      this.editando=true;
    }
    
    guardarCambios(){
      if(!(JSON.stringify(this.item)===JSON.stringify(this.itemTemp)))
      this.save.emit(this.item);
      this.editando=false;
    }
  
    cancel(){
      this.item.cambiarValores(this.itemTemp);
      this.editando=false;
    }
    borrar(){
        this.delete.emit(this.item.id);
        this.autoDelete.emit(this.item);
    }
}