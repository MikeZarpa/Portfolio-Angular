import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/mis-classes/models/educacion';
import { EdicionItemConImagen } from 'src/app/mis-classes/paraEdicion/edicion-item-con-imagen';
import { ImageStorageService } from 'src/app/mis-servicios/ImageStorageService/image-storage.service';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent extends EdicionItemConImagen<Educacion> implements OnInit {

  constructor(private imagenStorage:ImageStorageService) {
    super(imagenStorage)
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
  override cargarUrlImg(url:string){  
    super.cargarUrlImg(url);
    this.item.img_logo=url;
  }
}
