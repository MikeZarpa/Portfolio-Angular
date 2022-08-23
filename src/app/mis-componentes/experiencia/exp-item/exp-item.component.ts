import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';
import { EdicionItemConImagen } from 'src/app/mis-classes/paraEdicion/edicion-item-con-imagen';
import { ImageStorageService } from 'src/app/mis-servicios/ImageStorageService/image-storage.service';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})
export class ExpItemComponent extends EdicionItemConImagen<Experiencia> implements OnInit {
  constructor(imgStorage:ImageStorageService) {
    super(imgStorage);
   }

  cambiandoLugar(texto:string){
    this.item.lugarNombre=texto;
  }
  cambiandoDescripcion(texto:string){
    this.item.descripcion=texto;
  }
  cambiandoPeriodo(texto:string){
    this.item.periodo=texto;
  }
  cambiandoPuesto(texto:string){
    this.item.puestoNombre=texto;
  }

  override cargarUrlImg(url: string): void {
    super.cargarUrlImg(url);
    this.item.img_logo=url;
  }
}
