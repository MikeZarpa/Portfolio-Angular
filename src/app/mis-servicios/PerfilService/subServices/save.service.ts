import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Educacion } from 'src/app/mis-classes/models/educacion';
import { Experiencia } from 'src/app/mis-classes/models/experiencia';
import { Habilidad } from 'src/app/mis-classes/models/habilidad';
import { Proyecto } from 'src/app/mis-classes/models/proyecto';
import { Usuario } from 'src/app/mis-classes/models/usuario';
import { SaveDTO } from 'src/app/mis-classes/modelsDTO/save-dto';
import { UsuarioDTO } from 'src/app/mis-classes/modelsDTO/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  urlSaveUsuario:string     ="/save/OnlyUsuario";
  urlSaveHabilidad:string   ="/save/Habilidad";
  urlSaveExperiencia:string ="/save/Experiencia";
  urlSaveProyecto:string    ="/save/Proyecto";
  urlSaveEducacion:string   ="/save/Educacion";

  private id_usuario!:number;
  private urlConexion!:string;
  private header!:HttpHeaders;

  constructor(private http:HttpClient) {
   }

   public setIdUsuario(id_usuario:number){
    this.id_usuario=id_usuario;
   }
   public setUrlConexion(url:string){
    this.urlConexion=url;
   }
   public setHeader(){
    this.header=new HttpHeaders().set('Type-Content','aplication/json').set('Authorization',''+localStorage.getItem("token"))
  }

   //Como Usuario no es DTO en Spring, necesitamos mandarlo de esta forma
   public saveUsuario(datos:Usuario):void{
    let options= {      
      headers: this.header,}
      this.http.post(this.urlConexion+this.urlSaveUsuario,datos,options).subscribe();
   }

   //Funciones hechas de manera genérica
   public saveHabilidad(datos:Habilidad[]):void{
    this.saveDatos(datos,this.urlSaveHabilidad);
   }
   public saveExperiencia(datos:Experiencia[]):void{
    this.saveDatos(datos,this.urlSaveExperiencia);
   }
   public saveProyecto(datos:Proyecto[]):void{
    this.saveDatos(datos,this.urlSaveProyecto);
   }
   public saveEducacion(datos:Educacion[]):void{
    this.saveDatos(datos,this.urlSaveEducacion)
   }


   private saveDatos(datos:any,urlSave:string):void{
    let options= {      
      headers: this.header}
      this.http.post<void>(this.urlConexion+urlSave,new SaveDTO(this.id_usuario,datos),options).subscribe();
   }
}
