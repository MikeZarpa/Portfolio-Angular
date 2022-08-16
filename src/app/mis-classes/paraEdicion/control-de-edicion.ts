import { NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ComponentItem } from "../models/component-item";

@Component({
    selector: 'app-paraEdicion',
    template: `<p>paraEdicion works!</p>`,    
    styles: []
  })
export class ControlDeEdicion<t extends ComponentItem<t>> {

    @Output() saveEvent = new EventEmitter<Array<t>>();
    @Output() deleteEvent = new EventEmitter<Array<number>>();
    @Output() resetEvent = new EventEmitter<string>();

    listSave: Array<t>=[];
    listDelete: Array<number>=[];
    @Input() itemsList:Array<t>=[];
    @Input() modoEdicion=true;
    itemGenerator!: t;

    //Para poder administrar las listas.
    addListSave(elemento:t){
        this.listSave.push(elemento);
    }
    addListDelete(idNumber: number|null){
        if(idNumber!=null){
            this.listDelete.push(idNumber);
        }
    }
    //Para agregar intanciar de manera generica necesitamos que los miembros de una clase puedan instanciar objetos de su propia clase; esto es dado que la instrucción "new t()" es inválida. Para indicarle al programa que puede llamar a esa función, lo indicamos con "t extends ComponentItem<t>" y la interfaz ComponentItem<t> tiene la instrucción "nuevaInstancia():t".

    //Importante: en el constructor se debe inicializar a itemGenerator.
    addNewItemToList(){
        this.itemsList.push(this.itemGenerator.nuevaInstancia());
    }

    //Para quitar un elemento de la lista a mostrar.
    removeItem(elemento:t){
        this.itemsList.forEach((item, index, array) => {
            if(item===elemento){
                array.splice(index,1);
            }
        });
        //Además como se quiere borrar un elemento, corroboramos que no se tome cualquier cambio que se quizo hacer antes.
        this.listSave.forEach((item, index, array) => {
            if(item===elemento){
                array.splice(index,1);
            }
        });
    }

    //Para guardar los cambios
    saveAll(){
        if(this.listSave.length>0){
            this.saveEvent.emit(this.listSave);
        }
        if(this.listDelete.length>0){
            this.deleteEvent.emit(this.listDelete);
        }
        this.cancelAll();
    }

    //Reinicia los cambios
    cancelAll(){
        this.listSave=[];
        this.listDelete=[];
        this.resetEvent.emit();
    }

    hayCambiosQueGuardar():boolean{
        return (this.listSave.length>0 || this.listDelete.length>0)
    }
}
