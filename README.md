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