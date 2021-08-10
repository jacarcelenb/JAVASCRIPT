

const fabricaDePromise = (indice) =>
new Promise((resolve , reject)=>{
    //resolve('la promesa fue resuelta');
    const tiempoRejected = Math.floor(Math.random()*10000)+1000;
    const tiempoResolved = Math.floor(Math.random()*10000)+1000;
    
    console.log("tiempoRejected", tiempoRejected);
    console.log("tiempoResolved",tiempoResolved);
 /**
  *    setTimeout(()=>{
        reject('la promesa  '+indice+' fallo');
    },tiempoRejected);
  */

    setTimeout(()=>{
        resolve('la promesa  '+indice+' satisfecha');
    },tiempoResolved);

});

/**
 * let misPromesas = [];

for (let index = 0; index < 10; index++) {
    misPromesas = [...misPromesas,fabricaDePromise(index)];
}
misPromesas.forEach(promesaActual
    =>promesaActual.then(respuesta =>console.log(respuesta))
    .catch(razon =>console.log(razon)) );

 */


 async function miAsyncfunction(){
    try {
        const miPromesa1 = await fabricaDePromise(1);
        console.log(miPromesa1);
        if (miPromesa1) {
            console.log("realizado")
        }
    } catch (error) {
        console.log("error...............");
    }
  
 }
 

function miFunctionNormal(){
    const miPromesa1 = fabricaDePromise(2).then(resultado =>console.log(resultado)).catch(razon => console.log(razon));
    console.log(miPromesa1);
}



