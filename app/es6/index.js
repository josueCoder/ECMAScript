function helloStudent(name='Josue',age=25,country='PE'){
    this.name=name;
    this.age=age;
    this.country=country;

    console.log(name,age,country)
}

helloStudent('Oscar',20,'MX');

// spread operator
const team1=['Maria','Carlos','Enrique'];
const team2=['Josue','Cristhian','Sonia'];

const education=['Mario',...team1,...team2];

console.log(education);

//creating object 

let namePet='Osita';
let race='Mestiza'

const myPet={
    namePet,
    race
}

console.log(myPet);

//destructuracion

const person={
    names:'Josue',
    lasName: 'Ccoyllo',
    age:23,
    country:'PE'
}

const {names,lasName,age,country}=person;

console.log(`Hi,I'm ${names} ${lasName},I have ${age} years old and I from ${country}`);

//export and import of module

import {greetStudent} from './hello'

//arrow function

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

//Promises---work the asynchrony

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
