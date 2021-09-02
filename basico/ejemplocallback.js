
/**
 * const miboton = document.getElementById("miboton");

const ejecutarCuandoHagaClick = evento => {
    console.log(evento)
    alert("click en el boton")
};

miboton.addEventListener('click',ejecutarCuandoHagaClick);
 */

 setTimeout(()=>{
     console.log("ejecucion1");
     setTimeout(()=>{
         console.log("ejecucion2")
         setTimeout(()=>{
            console.log("ejecucion3")
           
            setTimeout(()=>{
                console.log("ejecucion4")
            },4000);
        },3000);
     },2000);
 },1000);