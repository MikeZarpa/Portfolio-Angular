import { ComponentItem } from "./component-item";

interface IProyecto{
    id:number|null;
    fecha:string;
    nombre:string;
    descripcion:string;
    link:string;
    img_logo:string|null;
}

export class Proyecto implements ComponentItem<Proyecto> {
    public id:number|null;
    public fecha!:string;
    public nombre!:string;
    public descripcion!:string;
    public link!:string;
    public img_logo:string|null;

    constructor(proyecto?:IProyecto){
        this.id=proyecto?.id ?? null;
        this.fecha=proyecto?.fecha!;
        this.nombre=proyecto?.nombre!;
        this.descripcion=proyecto?.descripcion!;
        this.link=proyecto?.link!;
        this.img_logo=proyecto?.img_logo ?? null;
    };
    cambiarValores(item: Proyecto): void {
        this.id=item.id;
        this.fecha=item.fecha;
        this.nombre=item.nombre;
        this.descripcion=item.descripcion;
        this.link=item.link;
        this.img_logo=item.img_logo;
    }
    nuevaInstancia(): Proyecto {
        return new Proyecto({
            id:null,
            fecha:"Periodo de desarrollo",
            nombre:"Nuevo Proyecto",
            descripcion:"Nueva descripción del Proyecto",
            link:"",
            img_logo:null
        });
    }
}
