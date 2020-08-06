class Parent{
    constructor(){
        this.FathersName = "golam rosul"
    }
    getFullName(){
        return this.name + " " +this.FathersName
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("hasan");
const baby1 = new Child("tom");
console.log(baby.getFullName());
console.log(baby1.getFullName());
