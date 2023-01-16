export class pokemon{
    name!:string;
    id!:number;
    sprite!:string;
    tipo1!:string;
    tipo2!:string;
    constructor(name:string, id:number, sprite:string, tipo1:string, tipo2:string){
        this.name=name;
        this.id=id;
        this.sprite=sprite;
        this.tipo1=tipo1;
        this.tipo2=tipo2
    }
}