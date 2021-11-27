const juan = {
    nombre: "Juan",
    apellido: "Rodriguez",
    edad: 30,
    direccion: {
        departament: "Guatemala",
        municipio: "Guatemala"
    }
}

const juan2 = {
    ...juan, 
    apellido: "Perez", 
    telefono: "12345678",
    direccion: {
        ...juan.direccion,
        municipio: "santa Catarina Pinula",
        aldea: "Aldea 1"
    }
}

// console.log("juan: ", juan);
// console.log("juan2: ", juan2);





//ARREGLOS

const numeros = [1,2,3];

const numeros2 = [0, ...numeros, 4];

const index = numeros.indexOf(2);
const numeros3 = [
    ...numeros.slice(0, index),
    1.5,
    ...numeros.slice(index)
]


const numeros4 = numeros.filter(x => x != 2);

const numeros5 = numeros.map(x => x == 2 ? 100 : x);

console.log("Numeros: ", numeros);
console.log("numeros2: ", numeros2);
console.log("numeros3: ", numeros3);
console.log("numeros4: ", numeros4);
console.log("numeros5: ", numeros5);