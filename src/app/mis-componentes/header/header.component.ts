import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosLogin } from 'src/app/mis-classes/modelsDTO/datos-login';
import { TokenService } from 'src/app/mis-servicios/TokenService/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() modoEdicion:boolean=false;
  mostrarLogin:boolean=false;
  constructor(private tokenServi:TokenService,private route:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.mostrarLogin=!this.mostrarLogin;
  }
  
  onLogout(){
    this.tokenServi.logout();
    this.route.navigate(["/"]);
  }

}
