module.exports = {
    mascotas: [
        { tipo: "Perro", nombre: "Trusky0", propietario: "Camilo" },
        { tipo: "Perro", nombre: "Trusky1", propietario: "Camilo" },
        { tipo: "Perro", nombre: "Trusky2", propietario: "Camilo" },
        { tipo: "Perro", nombre: "Trusky3", propietario: "Jorge" }
    ],
    veterinarios: [
        {nombre: "Lucia", apellido: "Mina" , documento: "1005400184"},
        {nombre: "Ana", apellido: "Casa" , documento: "1005400190"},
        {nombre: "Jose", apellido: "Alvarez" , documento: "1235400164"},
        {nombre: "James", apellido: "Mena" , documento: "1987400184"},
    ],

    propietarios: [
        {nombre: "Luis", apellido: "Mendez" , documento: "1005400154"},
        {nombre: "Alex", apellido: "Garcia" , documento: "1785400152"},
        {nombre: "Carmen", apellido: "Loma" , documento: "1335400151"},
        {nombre: "Jaime", apellido: "Mendez" , documento: "1205400159"},
    ],

    consultas: [
       {mascota: 0 , veterinario: 0 , diagnostico: "Enfermedad",historia: "",fechaCreacion: new Date() , fechaEdicion: new Date()}, 
    ]

}