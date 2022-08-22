import { Component, Input, OnInit } from '@angular/core';
import { DatosLogin } from 'src/app/mis-classes/modelsDTO/datos-login';
import { TokenService } from 'src/app/mis-servicios/TokenService/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() existe:boolean=true;
  datosLogin:DatosLogin=new DatosLogin();
  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.tokenService.requestToken(this.datosLogin);
  }
  changeNombre(texto:string){
    this.datosLogin.nombreUsuario=texto;
  }
  changePass(texto:string){
    this.datosLogin.password=texto;
  }
}
