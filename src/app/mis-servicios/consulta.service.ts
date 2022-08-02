import { Injectable } from '@angular/core';
import { DatosDeConexion } from './datos-de-conexion';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Usuario } from '../mis-classes/models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService extends DatosDeConexion  {

  //esta dirección contiene el parametro ?id=0 pues el portfolio consultará siempre el mismo usuario, quizá en un futuro se desarrolle una opción de cambiar "cuentas" o de "multiples" cuentas.
  private urlConsulta:string=this.urlConexionBase+"/Usuarios/?id=0"
  constructor(
    private http:HttpClient
  ) {
    super();
  }

  public getUsuario():Observable<Usuario>{
    let header = new HttpHeaders().set('Type-Content','aplication/json');
    return this.http.get<Usuario>(this.urlConsulta,{
      headers:header
    });
  }
}
