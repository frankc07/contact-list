//Crea una funcion para cada una de las operaciones aritmeticas mas comunes utilizando las diferentes formas de sintaxis de una funcion estudiadas en el curso (Ref.)
//Llama a estas funciones con diferentes parametros e imprime los resultados en consola.
//Crea una funcion que reciba un array con numeros y te devuelva la suma de todos los números.

let listaContactos = [
    {id: 1, 
    nombre: "Franklin", 
    apellido: "Marcano", 
    telefono: "2976550", 
    ubicaciones:{ciudad: "caracas", direccion: 
    1010}},

    {id: 2, 
        nombre: "Jefferson", 
        apellido: "Marcano", 
        telefono: "257846", 
        ubicaciones:{ciudad: "caracas", direccion:   
        1010}}
]

let nuevoContacto = {id: 2, 
    nombre: "Jefferson", 
    apellido: "Marcano", 
    telefono: "257846", 
    ubicaciones:{ciudad: "caracas", direccion:   
    1010}}

agregarContacto(nuevoContacto);
imprimirContacto();