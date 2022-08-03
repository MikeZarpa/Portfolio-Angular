interface IEducacion{
    id:number|null;
    lugarNombre:string;
    carreraNombre:string;
    periodo:string;
    img_logo:string|null;
}

export class Educacion {
    public id:number|null;
    public lugarNombre!:string;
    public carreraNombre!:string;
    public periodo!:string;
    public img_logo:string|null;

    constructor(educacion?:IEducacion){
        this.id=educacion?.id ?? null;
        this.lugarNombre=educacion?.lugarNombre!;
        this.carreraNombre=educacion?.carreraNombre!;
        this.periodo=educacion?.periodo!;
        this.img_logo=educacion?.img_logo ?? null;
    };
}