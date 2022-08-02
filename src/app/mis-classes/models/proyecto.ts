import { timeStamp } from "console";

interface IProyecto{
    id:BigInt|null;
    fecha:String;
    nombre:String;
    descripcion:String;
    link:String;
    img_logo:String|null;
}

export class Proyecto {
    public id:BigInt|null;
    public fecha!:String;
    public nombre!:String;
    public descripcion!:String;
    public link!:String;
    public img_logo:String|null;

    constructor(proyecto?:IProyecto){
        this.id=proyecto?.id ?? null;
        this.fecha=proyecto?.fecha!;
        this.nombre=proyecto?.nombre!;
        this.descripcion=proyecto?.descripcion!;
        this.link=proyecto?.link!;
        this.img_logo=proyecto?.img_logo ?? null;
    };
}
