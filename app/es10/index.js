// Flat ---->metodo de un array que aplana una lista
//recibe como argumento el nivel de proundidad  -->1 ,2 ,3

const lista=[1,2,3,[1,2,3,[1,2,3]]]

console.log(lista.flat(1)); //aplanacion solo hasta el  1er nivel

console.log(lista.flat(2));// aplanacion hasta el nivel 2



//trimStard and trimEnd --->metodo de un string para matar espacios al inicio o al final

const phase='   hello world';
console.log(phase); //with space    
console.log(phase.trimStart());


//optional catch vim  ----->podemos pasar de forma opcional el parmetro de error al catch


//before
try{

}catch(error){

}

//now 
try{

}catch{   //ya no obligatorio pasarle el error
    error  //lo disponemos de "error"  de forma directa 

}

//from entries --->transforma clave valor a objetos
//// util :para transformar array en object

const entries=[['name','Josue'],['age',20]];

const entriesObject=Object.fromEntries(entries);
console.log(entriesObject)

//importante
//lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz

//objeto de tipo simbolo---->add una description

let mySymbl='My symbol';
let symbl=Symbol(mySymbl);

console.log(symbl.description)
console.log(symbl)
