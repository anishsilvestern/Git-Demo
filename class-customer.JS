class Customer {
    constructor(ID, name, discount = 25) {
        this.ID = ID;
        this.name = name;
        this.discount = discount;
    
}
getID() {
    return this.ID;
}

getname() {
    return this.name;
}

getdiscount() {
    return this.discount;
}

setdiscount(discount){
    this.discount = discount;
}


}

let customer101 = new Customer(101, "Anish");
let customer102 = new Customer(102, "Silvestern")

//customer101.setdiscount(30);

console.log(customer101.name)

