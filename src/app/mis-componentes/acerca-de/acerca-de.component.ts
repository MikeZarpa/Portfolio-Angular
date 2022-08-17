import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/mis-classes/models/usuario';
import { EdicionItem } from 'src/app/mis-classes/paraEdicion/edicion-item';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent extends EdicionItem<Usuario> implements OnInit {
  constructor() {
    super()
    this.itemGenerator=new Usuario("","");
  }
  override ngOnInit(): void {
    //Para que no intente activar el modoEdicion al iniciar
  }

  cambiandoNombre(texto:string){
    this.item.nombre=texto;
  }
  cambiandoTitulo(texto:string){
    this.item.titulo=texto;
  }
  cambiandoResumen(text:string){
    this.item.resumenPerfil=text;
  }
  hayCambiosQueGuardar():boolean{
    if(this.editando) return JSON.stringify(this.itemTemp)!=JSON.stringify(this.item);
    return false;
  }

  saveUsuario(){
    this.save.emit(this.item);
  }
}
