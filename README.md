# Curso de Ecmascript

### Parameters for default
```
function helloStudent(name='Josue',age=25,country='PE'){
    this.name=name;
    this.age=age;
    this.country=country;
    console.log(name,age,country)
}
helloStudent()

helloStudent('Oscar',20,'MX')
```
### spread operator 
```
const team1=['Maria','Carlos','Enrique'];
const team2=['Josue','Cristhian','Sonia'];

const education=['Mario',...team1,...team2];

console.log(education);

//result
[
  'Mario',
  'Maria',
  'Carlos',
  'Enrique',
  'Josue',
  'Cristhian',
  'Sonia'
]

```
### Creating object 
##### Creando objetos  tomando como atributos variables declaradas inicialmente

```
let namePet='Osita';
let race='Mestiza'

const myPet={
    namePet,
    race
}

//result
{ namePet: 'Osita', race: 'Mestiza' }
Se observa como  apartir de  incorporar como atributo solo la key  de las variables.JS lo añade con clave y valor 
```
### Destructuring
```
const person={
    names:'Josue',
    lasName: 'Ccoyllo',
    age:23,
    country:'PE'
}

const {names,lasName,age,country}=person;

console.log(`Hi,I'm ${names} ${lasName},I have ${age} years old and I from ${country}`);

//result
Hi,I'm Josue Ccoyllo,I have 23 years old and I from PE
```
### Import and Export
Existen dos tipos diferentes de exportación , nombrada y por defecto. Se pueden tener varias exportaciones nombradas por módulo pero sólo una exportación por defecto. 
```
//En el archivo hello.js

function greetStudent(student){
    console.log(`Hello ${student}`);
}


export default greetStudent;

//En el archivo index.js

import{greetStudent} from './hello'
```
👉[More information](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)

### Arrow Fuctions
```
const products=[
    {name:'Celular',price:500},
    {name:'Laptop',price:1500},
    {name:'Teclado',price:60},
    {name:'Mouse',price:30},
    {name:'Parlante',price:120},
    {name:'Audifinos',price:200}
]

const cheepProducts=products.filter((element)=>{return element.price<=500});

const nameCheepProducts=products.filter(element=>element.price<=500).map(element=>element.name);

console.log(cheepProducts);
console.log(`List of products cheep <=500: ${nameCheepProducts}`);

//result 
[
  { name: 'Celular', price: 500 },
  { name: 'Teclado', price: 60 },
  { name: 'Mouse', price: 30 },
  { name: 'Parlante', price: 120 },
  { name: 'Audifinos', price: 200 }
]
List of products cheep <=500: Celular,Teclado,Mouse,Parlante,Audifinos
```
### Promises
Una Promise es un objeto que representa la ``` terminación ``` o ```el fracaso``` de una operación asíncrona.
```
const helloPromise=()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey.....');
        }else{
            reject('Ups.....');
        }
    });

}
//execute promise
helloPromise()
    .then(response=>console.log(response))     //then--->permite optener la respuesta
    .catch(error=>console.log(error));  //catch -->obtener el error

//result

Hey.....
```
👉[More information](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises)
### Generator
```

function* helloGenerator(){
    if(true){
        yield 'Hello' ;  //yield --->hacer un llamado
    }
    if(true){
        yield 'World';
    }

}
const genratorHello=helloGenerator();
console.log(genratorHello.next().value);
console.log(genratorHello.next().value);
console.log(genratorHello.next().value);

//result
Hello
World
undefined
```
### Include
Util para  saber si un  elemento esta incluido en un array o string 
```
let numbers=[1,2,5,6,7,8];

if(numbers.includes(7)){
    console.log('Si se encuenta el valor 7');
}else{
    console.log('No se encuentra')
}

//result
Si se encuenta el valor 7
```
### Objetc.```entries()``` -->transforma todo el  objeto en una matriz
### Objetc.```values()``` -->Retorna los valores de un objeto en una matriz

```

const data={
    fronted:'Josue',
    bakend:'Carlos',
    dising:'Maria'
}

const entries=Object.entries(data)
console.log(entries)

//result 
[
  [ 'fronted', 'Josue' ],
  [ 'bakend', 'Carlos' ],
  [ 'dising', 'Maria' ]
]

//Object.values()
const develop={
    fronted:'Josue',
    bakend:'Carlos',
    dising:'Maria'
}

const values=Object.values(develop);
console.log(values);
//result
[ 'Josue', 'Carlos', 'Maria' ]
```
### Padding 
Se utiliza para rellenar un string con otro string .</br>
1° argumento ->longitud del string final una ves se halla rellenado. </br>
2° argumento ->Corresponde al string  que se rellenara con el string original.

```
const string='hello';
console.log(string.padStart(7,'hi')) // padStart -->add al inicio
console.log(string.padEnd(12,'-'))  //  padEnd -->add al final
```
Podria ser util en el front ,para mostrar una estructura de elementos.
