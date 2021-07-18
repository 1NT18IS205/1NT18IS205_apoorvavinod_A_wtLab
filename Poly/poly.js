class Animal{
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log("Generic animal sound")
    }
}
class Cat extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        super.makeSound()
        console.log("meow")
    }
}

const a1 = new Animal()
a1.makeSound()

const a2 = new Cat('Persian Cat')
a2.makeSound()