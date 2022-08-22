export class Jwt {
    token!:string;
    bearer:string="Bearer ";

    constructor(token:string){
        this.token=token;
    }
}
