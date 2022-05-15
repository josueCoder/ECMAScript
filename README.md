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
```

```