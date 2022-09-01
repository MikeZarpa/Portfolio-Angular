import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/mis-classes/models/usuario';
import { EdicionItemConImagen } from 'src/app/mis-classes/paraEdicion/edicion-item-con-imagen';
import { ImageStorageService } from 'src/app/mis-servicios/ImageStorageService/image-storage.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent extends EdicionItemConImagen<Usuario> implements OnInit {
  constructor(imgStorage:ImageStorageService) {
    super(imgStorage)
    this.itemGenerator=new Usuario();
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
    if(this.editando) {
      return (JSON.stringify(this.itemTemp.img_perfil)!=JSON.stringify(this.item.img_perfil)||JSON.stringify(this.itemTemp.nombre)!=JSON.stringify(this.item.nombre)||JSON.stringify(this.itemTemp.titulo)!=JSON.stringify(this.item.titulo)||JSON.stringify(this.itemTemp.resumenPerfil)!=JSON.stringify(this.item.resumenPerfil));
    }
    return false;
  }
  desactivarGuardar(){
    return !(this.sePuedeGuardar() && this.hayCambiosQueGuardar())
  }

  saveUsuario(){
    this.save.emit(this.item);
    this.editando=false;
  }

  override cargarUrlImg(url: string): void {
    super.cargarUrlImg(url);
    this.item.img_perfil=url;
  }
}
