export class Travellers{
    public name: string;
    public age: number;
    public gender:string;
    public seatNumber:string; 
    
    constructor(name:string,age:number,seatNumber:string,gender:string){
        this.name = name;
        this.gender = gender;
        this.seatNumber = seatNumber;
        this.age = age;
    }

}