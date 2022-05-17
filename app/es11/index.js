//dinamic import---->llamar piezas de codigo dentro de otra otro archivo de forma dinamica

// Permite llamar nuestro código cuando lo necesitemos.

// El archivo no se va a cargar de manera automatica.

// Con esto podremos dividir nuestro codigo y evitar que la app sea muy grande.

// Por todo lo anterior, mejora la performance.
const button=document.getElementById('btnImport');

button.addEventListener('click',async function(){
    const module =await import('./file.js');  //await --->para que espere la importacion
    //utilizar funcion importada
    module.hello();
});

//video:https://platzi.com/clases/1815-ecmascript-6/39726-ecmascript-2020/

//promise.allSettled
//Nos da una promesa despues de que todas las promesas se hallan resuelto o rechazado

const promise1=new Promise((resolve,reject) =>reject('reject'));
const promise2=new Promise((resolve,reject) =>reject('resolve'));
const promise3=new Promise((resolve,reject) =>reject('resolve1'));

Promise.allSettled([promise1,promise2,promise3])
    .then(response=>console.log(response));


//Promise ALL vs Promise All Settled

//Promise ALL--->va ser rechazada al momento en el q algunas de las promesas es rechazada y finaliza
//Promise All Settled--->No importa el estado de las promesas y espera a todas se resuelvan




// operador null  ?? --->devuelve su operando del lado rerecho
// cuando su operador  de lado izquierdo es null o undefined
// de lo contrario devuelve su operador del lado izquierdo

const foo=null ?? 'default string ';
// spruntando si el primer elmento es null

console.log(foo);

//funcionamiento : preguntar  si el elemento tiene valor null p undefined
    //si es verdad remplaza el valor con el string asignado ,de lo contrario mantiene el mismo valor;

//opcional channing 

const user={};
// console.log(user?.profile?.email) --->aqui se rompe la app ,por que email no esta definido; 
console.log(user?.profile?.email); //add "? " indica hasta que nivel se quiere leer y evitar que se rompa la app


if(user?.opcional?.email){
    console.log('email')
}else{
    console.log('fail')
}

//video explicativo:https://platzi.com/clases/1815-ecmascript-6/39727-ecmascript-2020-caracteristicas-importantes/