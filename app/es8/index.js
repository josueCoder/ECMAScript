// Object entries()-->transforma un objeto en un array
//Object values()--->retorna valores de un objeto en un array
const data={
    fronted:'Josue',
    bakend:'Carlos',
    dising:'Maria'
}

const entries=Object.entries(data)
console.log(entries)


const develop={
    fronted:'Josue',
    bakend:'Carlos',
    dising:'Maria'
}

const values=Object.values(develop);
console.log(values);

//padding---->Se usa para rellenar un string con otro string hasta alcanzar una logitud dada.  
//relleno al inicio(.padStart) o al final(.padEnt).
//// el primer argumento es la longitud del string final una vez se halla rellenado
//// el segundo argumento corresponde al string que se rellenara con el string original
//podria servir en el front ,para mostrar una estructura de elementos.
const string='hello';
console.log(string.padStart(7,'hi')) //add al inicio
console.log(string.padEnd(12,'-'))  //add al final