import { throws } from "assert";

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender:string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

}

const sungwon = new Human("sungwon", 18, "male");

const sayHi = (person:Human):string => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    return "heelo";
};

console.log(sayHi(sungwon));

export {};