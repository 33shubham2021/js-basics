// First javascript code
//console.log('Hello World');

// name cannot be a reserved keyword
// no hyphen allowed

//primitive data types (symbol as well in ES-6)
let name = "Shubham";
let age = 28;
let isApproved = true;
let firstname = undefined;
let lastName = null;

//console.log(typeof age);

let person = {
    name : "Mosh",
    age : 30
};

//console.log(person);

person.name = "Shubham";
person["age"] = 30;

//console.log(person);

//Arrays 
let selectedColors = ['red', 'blue']; // Empty array []
selectedColors[2] = 'green';
selectedColors[3] = 4;
//console.log(selectedColors);


//Functions - Reference type

function greet(name, lastName = 'Sharma') {
    console.log('Hello ' + name + ' ' + lastName);
}

function square(x){
    return x*x;
}

greet('Shubham');
greet('Rashmi');
greet(square(2));










