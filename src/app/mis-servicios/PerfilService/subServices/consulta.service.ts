import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/mis-classes/modelsDTO/usuario-dto';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService{
  respuesta!:UsuarioDTO;
  private urlConexion!:string;
  private header!:HttpHeaders;
  private urlConsultaUsuario:string="/Usuarios/?id=";

  constructor(private http:HttpClient) {
  }
  public setUrlConexion(url:string){
    this.urlConexion=url;
  }
  public setHeader(){
    this.header=new HttpHeaders().set('Type-Content','aplication/json');
  }

  public getUsuario(id:number):Observable<UsuarioDTO>{
    return this.http.get<UsuarioDTO>(this.urlConexion+this.urlConsultaUsuario+id,{
      headers:this.header
    });
  } 
}
