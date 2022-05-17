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
