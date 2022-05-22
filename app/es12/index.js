//replaceAll()-->metodo string

const string ='JavaScript es maravilloso,con JavaScript puedo crear al futuro';

const replaceString=string.replace('JavaScript','Python');
console.log(replaceString)

//replace()--->encuentra solo el primer elemento y lo remplaza
//replaceAll()--->rempalza todos loa string que coincidan con el valor ingresado.
const replaceString2=string.replaceAll('JavaScript','Python')
console.log(replaceString2)

//private method-->#


class Message{
    //method public
    show(val){
        console.log(val);
    }
}

//creating object
const message=new Message();
message.show('hello')

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


//Promise.any---->retorna la promesa que se resuleva primero e ignora los demas

const promise1=new Promise((resolve,reject)=>reject('1'));
const promise2=new Promise((resolve,reject)=>resolve('2'));
const promise3=new Promise((resolve,reject)=>resolve('3'));

Promise.any([promise1,promise2,promise3])
    .then(response=>console.log(response));

//with ref---->permite obtener una referncia de foma debil a un objeto ,evitando 
//que el objeto sea recojido por el manejador de basura (gabah colector)

//garbash colector--->libera elementos de la memoria
class anyClass{
   constructor(elemnt){
       this.ref =new WeakRef(element)
   } 
  
}



