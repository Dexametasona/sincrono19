export class pokemon{
    name!:string;
    id!:number;
    sprite!:string;
    tipo1!:string;
    tipo2!:string;
    color1!:string;
    color2!:string;
    constructor(name:string, id:number, sprite:string, tipo1:string, tipo2:string, color1:string, color2:string){
        this.name=name;
        this.id=id;
        this.sprite=sprite;
        this.tipo1=tipo1;
        this.tipo2=tipo2;
        this.color1=color1;
        this.color2=color2
    }
}