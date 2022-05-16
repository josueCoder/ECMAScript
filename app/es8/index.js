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

//async  await
///setTimeout---para que tarde un tiempo especifico,recibe como argumento:
/////// mensaje y el tiempo que tardara para mostrarse
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
