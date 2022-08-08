import { Component } from '@angular/core';
import { Educacion } from './mis-classes/models/educacion';
import { UsuarioDTO } from './mis-classes/modelsDTO/usuario-dto';
import { PerfilService } from './mis-servicios/PerfilService/perfil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario:UsuarioDTO=new UsuarioDTO("Miguel Eduardo Schneider","Programador Web FullStack","","","Soy un gran desarrollador");

  title = 'Portfolio';

  constructor(private perfilService:PerfilService){
    this.usuario.experiencias=[
      {id:null,lugarNombre:"Lugar Numero 1",puestoNombre:"Nombre del puesto",periodo:"Periodo de la experiencia",descripcion:"Descripción del puesto."},
      {id:null,lugarNombre:"Lugar Numero 2",puestoNombre:"Nombre del puesto",periodo:"Periodo de la experiencia",descripcion:"Descripción del puesto."},
      {id:null,lugarNombre:"Lugar Numero 3",puestoNombre:"Nombre del puesto",periodo:"Periodo de la experiencia",descripcion:"Descripción del puesto."}]

    this.usuario.educaciones=[
      {id:null,lugarNombre:"Lugar Educacion 1",carreraNombre:"Nombre de la Carrera 1",img_logo:null,periodo:"Periodo Educacion"},
      {id:null,lugarNombre:"Lugar Educacion 2",carreraNombre:"Nombre de la Carrera 2",img_logo:null,periodo:"Periodo Educacion"},
      {id:null,lugarNombre:"Lugar Educacion 3",carreraNombre:"Nombre de la Carrera 3",img_logo:null,periodo:"Periodo Educacion"},
      {id:null,lugarNombre:"Lugar Educacion 4",carreraNombre:"Nombre de la Carrera 4",img_logo:null,periodo:"Periodo Educacion"},
    ];

    this.usuario.habilidades=[
      {id:null,nombre:"Habilidad 1 -20",porcentaje:20,tipo:"Hard"},
      {id:null,nombre:"Habilidad 2 -40",porcentaje:40,tipo:"Soft"},
      {id:null,nombre:"Habilidad 3 -60",porcentaje:60,tipo:"Hard"},
      {id:null,nombre:"Habilidad 4 -80",porcentaje:80,tipo:"Soft"},
      {id:null,nombre:"Habilidad 5 -100",porcentaje:100,tipo:"Hard"}]

    this.usuario.proyectos=[
      {id:null,fecha:"Fecha 1",nombre:"Proyecto 1",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"},
      {id:null,fecha:"Fecha 2",nombre:"Proyecto 2",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"},
      {id:null,fecha:"Fecha 3",nombre:"Proyecto 3",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"},
      {id:null,fecha:"Fecha 4",nombre:"Proyecto 4",descripcion:"Descripción del proyecto",img_logo:null,link:"https://www.google.com"}]
    //Enviamos un 0 pues el portfolio consultará siempre el mismo usuario, quizá en un futuro se desarrolle una opción de cambiar "cuentas" o la posibilidad de proveer información a otros perfiles.
    this.perfilService.setIdUsuario(0);
    //Inicializador para el portfolio
    this.perfilService.obtenerUsuario().subscribe(res=>{this.usuario=res;});
  }
  ngOnInit(): void {
  }
}
