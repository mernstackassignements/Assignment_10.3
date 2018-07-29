/// Javascript code 

// JS Class Inheretance
class Dog{
    constructor(name){
        this.Name = name;
    }

    speak(){
        return 'woof';
    }
}

class Labrador extends Dog{
    constructor(){
        super('Labrador');
        this.Color = 'black';
        this.BreadWeight = 50;
    }

    speak(){
        return this.Name +' says woof';
    }
}

var dog = new Labrador();
console.log(dog.speak());