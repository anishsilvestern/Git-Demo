




class Person{
    constructor(){
          this.name = "NONAME"
          this.age = "NOAGE"
    }
    getDetails() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
}
}
let person101 = new Person();
let person102 = new Person();

person101.name = 'Anish';
person101.age = '24';

person102.name = 'Jadeja';
person102.age = '39';


person101.getDetails();
person102.getDetails();
