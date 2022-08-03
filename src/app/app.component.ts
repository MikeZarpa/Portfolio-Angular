import { Component } from '@angular/core';
import { UsuarioDTO } from './mis-classes/modelsDTO/usuario-dto';
import { PerfilService } from './mis-servicios/PerfilService/perfil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario:UsuarioDTO=new UsuarioDTO("","","","","");
  title = 'Portfolio';

  constructor(private perfilService:PerfilService){
    //Enviamos un 0 pues el portfolio consultará siempre el mismo usuario, quizá en un futuro se desarrolle una opción de cambiar "cuentas" o la posibilidad de proveer información a otros perfiles.
    this.perfilService.setIdUsuario(0);
    //Inicializador para el portfolio
    this.perfilService.obtenerUsuario().subscribe(res=>{this.usuario=res;});
  }
  ngOnInit(): void {
  }
}
