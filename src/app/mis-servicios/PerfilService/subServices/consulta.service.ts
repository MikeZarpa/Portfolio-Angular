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

  private urlConsultaUsuario:string="/Usuarios/?id=";
  constructor(private http:HttpClient) {
  }
  public setUrlConexion(url:string){
    this.urlConexion=url;
  }

  public getUsuario(id:number):Observable<UsuarioDTO>{
    let header = new HttpHeaders().set('Type-Content','aplication/json');
    return this.http.get<UsuarioDTO>(this.urlConexion+this.urlConsultaUsuario+id,{
      headers:header
    });
  } 
}
