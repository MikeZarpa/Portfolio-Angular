import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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



export class EdicionItem<t extends ComponentItem<t>> implements OnInit {

    @Input() item!:t;
    @Input() itemGenerator!:t;
    @Input() modoEdicion:boolean=false;
    @Output() save = new EventEmitter<t>()
    @Output() delete = new EventEmitter<number|null>()
    @Output() autoDelete = new EventEmitter<t>()

    itemTemp!:t;
    editando:boolean=false;
    
    ngOnInit(): void {
      if(!this.item.id&&this.itemGenerator){
        this.comenzarAEditar();
      }
    }
    
    comenzarAEditar(){
      this.itemTemp=this.itemGenerator.nuevaInstancia();
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
      
      //Si es la primera vez que se crea, su itemTemp no cambió en nada, por lo que si se cancela, consideramos que se cancela la creación de un objeto nuevo, por ello, lo borramos
      if(JSON.stringify(this.itemTemp)==JSON.stringify(this.itemGenerator.nuevaInstancia()))
      this.autoDelete.emit(this.item);
    }
    borrar(){
        this.delete.emit(this.item.id);
        this.autoDelete.emit(this.item);
    }
}