//operador de reposo (...all)---->extrae propiedades de un object ,para generar un nuevo objeto

const obj={
    name:'Josue',
    age:20,
    country:'PE',
}

let {country,...all}=obj
console.log(all)


//aclaracion
//operador de reposo ...all
//operador de propagacion (unir dos o mas objetos)

//unir object con  spread operator

const objeto={
    name:'Rafael',
    age: 23
}

const objeto1={
    ...objeto,
    country:'PE'
}

console.log(objeto1)


//
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

//regex-------------{here se establece la regla}
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ 
const match=regexData.exec('2010-04-20');
const year=match[1];
const month=match[2];
const day=match[3];

console.log(year,month,day)

