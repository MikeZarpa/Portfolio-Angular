//Con esta clase enviamos componentes a salvar como Habilidades, Proyectos...
export class SaveDTO {
    id_usuario!:number;
    datos:any;
    constructor(id_usuario:number,datos:any){
        this.id_usuario=id_usuario;
        this.datos=datos;
    }
}
