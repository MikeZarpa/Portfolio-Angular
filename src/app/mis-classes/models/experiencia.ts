interface IExperiencia{
    id:BigInt|null;
    lugarNombre:String;
    puestoNombre:String;
    periodo:String;
    descripcion:String;
}

export class Experiencia {
    public id:BigInt|null;
    public lugarNombre!:String;
    public puestoNombre!:String;
    public periodo!:String;
    public descripcion!:String;

    constructor(experiencia?:IExperiencia){
        this.id=experiencia?.id ?? null;
        this.lugarNombre=experiencia?.lugarNombre!;
        this.puestoNombre=experiencia?.puestoNombre!;
        this.periodo=experiencia?.periodo!;
        this.descripcion=experiencia?.descripcion!;
    };
}