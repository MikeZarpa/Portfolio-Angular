import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DatosLogin } from 'src/app/mis-classes/modelsDTO/datos-login';
import { Jwt } from 'src/app/mis-classes/modelsDTO/jwt';
import { DatosDeConexion } from '../datos-de-conexion';

const TOKENKEY:string="KEY_TOKEN"
const URL_AUTH_LOGIN:string="/auth/login";
const URL_AUTH_RESET:string="/auth/reset";

@Injectable({
  providedIn: 'root'
})
export class TokenService extends DatosDeConexion {
  
  constructor(private http:HttpClient,private route:Router) { super() }

  getToken():string|null{
    return localStorage.getItem(TOKENKEY);
  }

  requestToken(datos:DatosLogin){
      let options= {}
      this.http.post<Jwt>(this.urlConexionBase+URL_AUTH_LOGIN,datos,options).subscribe(
        res => {
            this.saveToken(res);
            this.refreshPage();
        }
      );
     
  }
  saveToken(jwt:Jwt){
    localStorage.removeItem(TOKENKEY);
    localStorage.setItem(TOKENKEY,jwt.token);
  }
  logout(){
    localStorage.removeItem(TOKENKEY);
    this.refreshPage();
  }
  isLogged():boolean{
    return this.getToken()!= null;
  }
  reset(dto:Jwt){    
    let options= {}
    return this.http.post<Jwt>(this.urlConexionBase+URL_AUTH_RESET,dto,options);
  }

  refreshPage(){
    window.location.reload();
  }
}
