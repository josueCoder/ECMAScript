# Curso de Ecmascript
```tc39```  es el comite encargado de implementar mejoras a JS

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
### **Generator** ---funcion especial 
function*
```

function* helloGenerator(){
    if(true){
        yield 'Hello' ;  //yield --->indica que nos retornara algo. 
    }                                ademas guarda el estado de forma interna.        
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
![chart generator](https://static.platzi.com/media/user_upload/Funciones%20Comunes-4db3081f-31d9-4767-b552-709cd2f1749e.jpg)
### **Include**
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
### **Objetc.```entries()```** -->transforma todo el  objeto en una matriz
### **Objetc.```values()```** -->Retorna los valores de un objeto en una matriz

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
### **Padding** 
Se utiliza para rellenar un string con otro string .</br>
1° argumento ->longitud del string final una ves se halla rellenado. </br>
2° argumento ->Corresponde al string  que se rellenara con el string original.

```
const string='hello';
console.log(string.padStart(7,'hi')) // padStart -->add al inicio
console.log(string.padEnd(12,'-'))  //  padEnd -->add al final
```
Podria ser util en el front ,para mostrar una estructura de elementos.
### **Async Await**
*```Async```*:Sirve para marcar una funcion como asincrona y su valor de retorno es una promesa.
```Await```:Solo es aplicable a las funciones marcadas como **async**
            Pone en espera la ejecucion de la funcion mientras la promesa se resuleve.

```
setTimeout---añade un tiempo especifico,recibe como argumento:
 mensaje y el tiempo que tardara para mostrarse
const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?setTimeout(()=>resolve('Hello World'),3000)
            :reject(new Error('Test Error'))

    })
};

const helloAsync= async ()=>{
    const hello=await helloWorld();
    console.log(hello);

}
helloAsync();

//mejor forma de trabajar
const anotherFunction= async ()=>{
    try{
        const hello =await helloWorld();
        console.log(hello)
    }catch(error){
        console.log(error);
    }


}
anotherFunction();
```
### **Oprerador de reposo  ------>```...all```**
Extrae propiedades de object ,para generar un  nuevo objeto.
```
const obj={
    name:'Josue',
    age:20,
    country:'PE',
}

let {country,...all}=obj
console.log(all)

//result
{ name: 'Josue', age: 20 } // se observa que aislo a country

🙌aclaracion🙌
//operador de reposo ...all
//operador de propagacion (unir dos o mas objetos)

```
### **Unir objetos--------->```... (spread operator)```**
```
const objeto={
    name:'Rafael',
    age: 23
}

const objeto1={
    ...objeto,
    country:'PE'
}

console.log(objeto1)

//result
{ name: 'Rafael', age: 23, country: 'PE' }
```
### **Promise ---->```incorporacion de "finally"```**
```
const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (true)
            ?setTimeout(()=>resolve('Hello World'),3000)
            :reject(new Error('Test Error'))
    });


}
helloWorld()
    .then(response=>console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('Finalizo'))

//result
Hello World
Finalizo
```
### **Regex**
```
-----------------------{aqui se establece la regla}
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
const match=regexData.exec('2010-04-20');
const year=match[1];
const month=match[2];
const day=match[3];

console.log(year,month,day)
//result
2010 04 20


```
### **Flat**
Metodo de array que ```aplana una lista``` </br>
recibe como argumento el nivel de proundidad  -->```1 ,2 ,3```

```


const lista=[1,2,3,[1,2,3,[1,2,3]]]

console.log(lista.flat(1)); //aplanacion solo hasta el  1er nivel

console.log(lista.flat(2));// aplanacion hasta el nivel 2
//result
[ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]

[
  1, 2, 3, 1, 2,
  3, 1, 2, 3
]
```
### **trimStar and trimEnd**
Metodo de un string para matar espacios vacios al inicio o al final.

```
const phase='   hello world';
console.log(phase); //with space    
console.log(phase.trimStart());

//result
   hello world

hello world     //sin espacios al inicio

```
### **Optional Catch Binding ----error**
Podemos pasar de forma ```opcional el parmetro de error``` al catch
```
//before
try{

}catch(error){

}

//now 
try{

}catch{   //ya no obligatorio pasarle el error
    error  //lo disponemos de "error"  de forma directa 

}
```
### **fromEntries** 
transforma clave valor a objeto </br>
util:para transformar array en object
```
const entries=[['name','Josue'],['age',20]];

const entriesObject=Object.fromEntries(entries);
console.log(entriesObject)

//result
{ name: 'Josue', age: 20 }

🙌importante🙌
fromEntries ->es lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz

```
### **Dinamic Import**
llamar piezas de codigo dentro de otra otro archivo de forma dinamica

- Permite llamar nuestro código cuando lo necesitemos.
- El archivo no se va a cargar de manera automatica.
- Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.
-  Por todo lo anterior, mejora la performance.
```
//en file ---> file.js

export function hello(){
    console.log('Hello World');
}
```
```
//file -->index.js
const button=document.getElementById('btnImport');

button.addEventListener('click',async function(){
    const module =await import('./file.js');  //await --->para que espere la importacion
    //utilizar funcion importada
    module.hello();
});
```
👉[video explicativo](https://platzi.com/clases/1815-ecmascript-6/39726-ecmascript-2020/).

### **Promise.```allSettled()```**
Nos da una promesa despues de que todas las promesas se hallan resuelto o rechazado.

-----------------------------
Promise.all() | ```allSettled()```
------- | --------
Va ser rechazada al momento en el q algunas de las promesas es rechazada y finaliza   | No importa el estado de las promesas y espera a todas se resuelvan

```


const promise1=new Promise((resolve,reject) =>reject('reject'));
const promise2=new Promise((resolve,reject) =>reject('resolve'));
const promise3=new Promise((resolve,reject) =>reject('resolve1'));

Promise.allSettled([promise1,promise2,promise3])
    .then(response=>console.log(response));

//result
[
  { status: 'rejected', reason: 'reject' },
  { status: 'rejected', reason: 'resolve' },
  { status: 'rejected', reason: 'resolve1' }
]    

```
### **Oparator null --->```??```**
funcionamiento : ```pregunta ``` si el elemento tiene valor ```null``` o ```undefined```
si es verdad remplaza el valor con el string asignado ,de lo contrario mantiene el mismo valor;

```
const foo=null ?? 'default string '; // pregunta si el primer elmento es null

console.log(foo);
//result
default string 

```
### **Optional Changing**

```
const user={};
// console.log(user?.profile?.email) --->aqui se rompe la app ,por que email no esta definido; 
console.log(user?.profile?.email); //add "? " indica hasta que nivel se quiere leer y evitar que se rompa la app


if(user?.opcional?.email){
    console.log('email')
}else{
    console.log('fail')
}
```
👉[video explicativo](https://platzi.com/clases/1815-ecmascript-6/39727-ecmascript-2020-caracteristicas-importantes/)

### **replaceAll()**--->method  string

| replace() | replaceAll() |
|------------|-------------|
| encuentra solo el primer elemento y lo remplaza | rempalza todos loa string que coincidan con el valor ingresado. |
       
```
//replaceAll()-->metodo string

const string ='JavaScript es maravilloso,con JavaScript puedo crear al futuro';

const replaceString=string.replace('JavaScript','Python');
console.log(replaceString)

//result
Python es maravilloso,con JavaScript puedo crear al futuro

const replaceString2=string.replaceAll('JavaScript','Python')
console.log(replaceString2)

//result
Python es maravilloso,con Python puedo crear al futuro

```
###  **Method Private**
Para indicar que un metodo sera private se utilza el '#'
```

class Message{
    //method public
    show(val){
        console.log(val);
    }
}

//creating object
const message=new Message();
message.show('hello')

//result
hello

//private method---#
//solo puede ser accedido dentro de la clase
class Message{
   
    #show(val){
        console.log(val);
    }
}
//creating object
const saludo=new Message();
message.show('hello')

//result
message is not defined
```

### **Promise.any**
Retorna la promesa que se resuleva primero e ignora los demas
```
const promise1=new Promise((resolve,reject)=>reject('1'));
const promise2=new Promise((resolve,reject)=>resolve('2'));
const promise3=new Promise((resolve,reject)=>resolve('3'));

Promise.any([promise1,promise2,promise3])
    .then(response=>console.log(response));

//result
2
```
### **whit ref **
Permite obtener una referncia de foma debil a un objeto ,evitando que el objeto sea recojido por el manejador de basura (gabah colector)

```


//garbash colector--->libera elementos de la memoria
class anyClass{
   constructor(elemnt){
       this.ref =new WeakRef(element)
   } 
  
}
```