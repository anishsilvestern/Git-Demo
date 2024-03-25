function call (name) {
    console.log(name)
}


function repeateString (name , callback) {
    console.log(name);
    callback(name);
}

repeateString("Anish", call)