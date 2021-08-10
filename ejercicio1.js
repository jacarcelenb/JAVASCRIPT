function obtenerNombre(){
    return "Jorge";
}
const name =()=> "Nombre";

function ObtenerApellido(){
 return "Carcelen";
}

function obtenerNombreCompleto(){
 const nombre = obtenerNombre();
 const apellido = ObtenerApellido();
 return `${nombre} ${apellido}`;
}

function sumar(num1 , num2){
    return num1 + num2;
}

function restar(num1 , num2){
    return num1 - num2;
}


function multiplicar (num1 , num2){
    return num1 * num2;
}

function multfuncion (num1 , num2 , callback){
    const resultado = callback(num1 , num2);
    console.log(resultado);
}

multfuncion(5,4, function (num1 , num2){
    return num1 + num2;
});
multifuncion(5,6,multiplicar);
const nombreCompleto = obtenerNombreCompleto();
console.log("NOMBRE COMPLETO "+nombreCompleto)
console.log(sumar(4,5))


