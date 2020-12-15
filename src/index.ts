interface Human {
    name:string,
    age:number,
    gender:string
};

const person = {
    name:"sungwon",
    gender: "male",
    age:22
};

const sayHi = (person:Human):string => {
    console.log(`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    return "heelo";
};

console.log(sayHi(person));

export {};