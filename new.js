// const readline = require('readline-sync');

// const name = readline.question('What is your name? ');
// const lastName = readline.question("What is your last name?")

// console.log(`Hello, ${name} ${lastName}, my name is Mac.`);

// const age = readline.question("How old are you?");

// if (age < 18){
//     console.log("Wow, you are very young!")
// }
// else{
//     console.log("Well, you are mature!")
// }

//Practice arrays
// const array = ["cero", [0, 1], "dos"];
// console.log(array);
// array[1][1] = "tres";
// console.log(array);
// console.log(array.includes("dos"));
// console.log(array.indexOf("dos"));
// array[1] = "tres"
// console.log(array.sort());
// let array2 = array.join(" ");
// console.log(array2);
// array.splice(0,1);
// console.log(array)


// //Practice String methods
// let text = "Please visit PA      "
// let text2 = " and Lancaster";
// let length = text.length;

// console.log(text + text2);
// console.log(length);
// console.log(text.trim() + text2);
// let newText = text.replace("a", "z")
// let searchText = text.indexOf("visit");
// console.log(newText);
// console.log(searchText);

// console.log(text.indexOf("A"));


//Practice loops

// let arr = [1, 3, 56, 778, 29];
// console.log(arr);

// let sum = 0;

// for (i = 0; i < arr.length; i++){
//     sum += arr[i];
//     console.log(sum);
// }

// console.log(sum);

// let y = 0;

// while (y < 10){
//     console.log(y);
//     y++;
// }


// let planets = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];

// for (planet of planets){
//     console.log(planet);
// }

//Practice Objects

// const yo = {
//     nombre: "Jose Pablo",
//     apellido: "Barragan",
//     edad: 42,
//     peso: 70
// }

// function callMe() {
//     for (item in yo) {
//         console.log(yo[item]);
//     }
// }

// callMe();

// yo.nombre = "Pablo";
// yo["edad"] = 43;

// callMe();

// Practice Math object

let arr = [1, 3, 56, 778, 29];
console.log(Math.max(... arr));
console.log(Math.min(... arr));

let pi = 3.1416;
console.log(pi);
console.log(Math.round(pi));
console.log(Math.ceil(pi));
console.log(Math.floor(pi));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

let planets = ["Mercurio", "Venus", "Tierra", "Marte", "Jupiter", "Saturno", "Urano", "Neptuno"];
let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
console.log(randomPlanet);


let week = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
let day = week[Math.floor(Math.random() * week.length)];
console.log(day);

for (dia of week) {
    console.log(dia);
}

let cadena = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let suma = 0;
for (i = 0; i < cadena.length; i++) {
    suma += i;
}
console.log(suma);

y = 0;
while (y < 100) {
    console.log(y);
    y++;
    if (y == 15){
        break
    }
}


