interface IProyecto{
    id:number|null;
    fecha:string;
    nombre:string;
    descripcion:string;
    link:string;
    img_logo:string|null;
}

export class Proyecto {
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
}
