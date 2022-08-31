import { Component } from "@angular/core";
import { ImageStorageService } from "src/app/mis-servicios/ImageStorageService/image-storage.service";
import { ComponentItem } from "../models/component-item";
import { EdicionItem } from "./edicion-item";

@Component({
    selector: 'app-EdicionItem',
    template: `<p>EdicionItemConImagen works!</p>`,    
    styles: []
  })
export class EdicionItemConImagen<t extends ComponentItem<t>> extends EdicionItem<t> {

    constructor(private imgStorage:ImageStorageService){
        super()
    }

      
  eventFileImg:any=null;
  uploadingImg=false;
  finishUploadImg=false;
  errorUploadImg=false;
  

  sePuedeGuardarImg():boolean{
    return !this.uploadingImg || this.finishUploadImg || this.errorUploadImg;
  }

  mostrarSaveAndCancel():boolean{
    return (this.hayArchivosParaCargar()&&this.editando&&(!(this.uploadingImg)||this.errorUploadImg))
  }

  catchFileEvent(event:any){
    this.uploadingImg=false;
    this.finishUploadImg=false;
    this.errorUploadImg=false;
    this.eventFileImg=event;
  }

  hayArchivosParaCargar():boolean{
    if(this.eventFileImg==null) return false;
    else return this.eventFileImg.target.files.length>0
  }
  ocultarBotonesGuardarImg(){
    return this.hayArchivosParaCargar() && !this.uploadingImg;
  }
  onCancelarImg(){
    //Aprovechamos que los objetos se pasan por referencia en JS/TS, así que a nuestro objeto 'eventFileImg' podemos editarlo, afectando al componente 'Input' de quien recibió el valor.
    this.eventFileImg.target.value=null;
  }
  
  
  onCargarImg(){
  if(this.hayArchivosParaCargar()){
      this.uploadingImg=true;
      this.imgStorage.readFile(this.eventFileImg.target.files[0]).then(url => this.cargarUrlImg(url)).catch(err =>this.errorCargar());
    }
  }

  cargarUrlImg(url:string){  
    //Falta agregar un comando tal como: this.item.img_logo=url;
    this.finishUploadImg=true;
  }
  errorCargar(){
    alert("Error al cargar la imagen");
    this.errorUploadImg=true;
  }
  cargandoImagen(){
    //Estamos cargando si, se está uploando y no finalizó de alguna manera
    return this.uploadingImg&&!(this.finishUploadImg||this.errorUploadImg);
  }
  
  //Control para guardar cambios
   sePuedeGuardar(){
     return (!this.cargandoImagen()&&this.HayCambios());
     //Se puede guardar si: No se está cargando una imagen y hay cambios.
  }
  //Si el elemento no tiene dirección de imagen asignada le devuelve la dirección del placeholder
  colocarPlaceHolder(texto:string|null):string{
    if(texto)
      if(texto!="")
        return texto;
    return "/assets/images/placeholder-img.webp";
  }
}
