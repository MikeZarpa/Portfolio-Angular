import { Component, OnInit } from '@angular/core';
import { DatosLogin } from 'src/app/mis-classes/modelsDTO/datos-login';
import { TokenService } from 'src/app/mis-servicios/TokenService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenServi:TokenService) { }

  ngOnInit(): void {
  }

  onLogin(){
    let datosLogin=new DatosLogin()
    datosLogin.nombreUsuario="userNAME"
    datosLogin.password="passWORD";
    this.tokenServi.requestToken(datosLogin);
  }

}
