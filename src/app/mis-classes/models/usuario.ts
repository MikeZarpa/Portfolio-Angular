export class Usuario {
    id!:String;
    nombre!:String;
    titulo!:String;
    img_banner!:String|null;
    img_perfil!:String|null;
    resumenPerfil!:String;

    constructor(nombre:String,titulo:String,img_banner:String="",img_perfil:String="",resumenPerfil:String=""){
        this.nombre=nombre;
        this.titulo=titulo;
        this.img_banner=img_banner;
        this.img_perfil=img_perfil;
        this.resumenPerfil=resumenPerfil;
    }
}
