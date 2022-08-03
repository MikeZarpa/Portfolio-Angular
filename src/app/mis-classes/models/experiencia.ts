interface IExperiencia{
    id:number|null;
    lugarNombre:string;
    puestoNombre:string;
    periodo:string;
    descripcion:string;
}

export class Experiencia {
    public id:number|null;
    public lugarNombre!:string;
    public puestoNombre!:string;
    public periodo!:string;
    public descripcion!:string;

    constructor(experiencia?:IExperiencia){
        this.id=experiencia?.id ?? null;
        this.lugarNombre=experiencia?.lugarNombre!;
        this.puestoNombre=experiencia?.puestoNombre!;
        this.periodo=experiencia?.periodo!;
        this.descripcion=experiencia?.descripcion!;
    };
}