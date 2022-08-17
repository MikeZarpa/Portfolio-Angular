import { ComponentItem } from "./component-item";

export class Usuario implements ComponentItem<Usuario> {
    id!:number|null;
    nombre!:string;
    titulo!:string;
    img_banner!:string|null;
    img_perfil!:string|null;
    resumenPerfil!:string;

    constructor(){
    }
    cambiarValores(usuario:Usuario){
        this.nombre=usuario.nombre;
        this.titulo=usuario.titulo;
        this.img_banner=usuario.img_banner;
        this.img_perfil=usuario.img_perfil;
        this.resumenPerfil=usuario.resumenPerfil;
    }
    nuevaInstancia(): Usuario {
        return new Usuario();
    }
}
