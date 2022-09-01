import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';
import { EdicionItemConImagen } from 'src/app/mis-classes/paraEdicion/edicion-item-con-imagen';
import { ImageStorageService } from 'src/app/mis-servicios/ImageStorageService/image-storage.service';

@Component({
  selector: 'app-proyecto-item',
  templateUrl: './proyecto-item.component.html',
  styleUrls: ['./proyecto-item.component.css']
})
export class ProyectoItemComponent extends EdicionItemConImagen<Proyecto> implements OnInit {

  constructor(imgStorage:ImageStorageService) {
    super(imgStorage)
   }
   override ngOnInit(): void {
    super.ngOnInit();
    this.item.img_logo=this.colocarPlaceHolder(this.item.img_logo);
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
  override cargarUrlImg(url: string): void {
    super.cargarUrlImg(url);
    this.item.img_logo=url;
  }
}
