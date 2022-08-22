import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  private urlDeleteHabilidad:string   ="/delete/Habilidad";
  private urlDeleteExperiencia:string ="/delete/Experiencia";
  private urlDeleteProyecto:string    ="/delete/Proyecto";
  private urlDeleteEducacion:string   ="/delete/Educacion";
  private urlConexion!:string;
  private header!:HttpHeaders;

  constructor(private http:HttpClient) {
   }
  public setUrlConexion(url:string){
    this.urlConexion=url;
  }
  public setHeader(){
    this.header=new HttpHeaders().set('Type-Content','aplication/json');
  }
 
  public deleteHabilidad(listaId:number[]):void{
    this.delete(listaId,this.urlDeleteHabilidad);
  }
  public deleteExperiencia(listaId:number[]):void{
    this.delete(listaId,this.urlDeleteExperiencia);
  }
  public deleteProyecto(listaId:number[]):void{
    this.delete(listaId,this.urlDeleteProyecto);
  }
  public deleteEducacion(listaId:number[]):void{
    this.delete(listaId,this.urlDeleteEducacion);
  }

  private delete(listaId:number[],urlDelete:string):void{
    let options= {      
      headers: this.header,
      //añadimos al body la lista de ids a borrar
      body: listaId}
    this.http.delete(this.urlConexion+urlDelete,options).subscribe();
  }
}
