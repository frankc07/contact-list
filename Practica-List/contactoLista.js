let listaContactos = [
    "FranklinMarcano",
    "JeffersonMarcano",
    "NilzaCarrero"
];

function agregarContacto(nuevoContacto){
    listaContactos.push(nuevoContacto);
    return listaContactos;
}

function borrarContacto(contactoABorrar){
    let nuevaLista = listaContactos.filter((contacto) => (contacto !== contactoABorrar));
    listaContactos = nuevaLista;
}

function imprimirContacto(){
    console.log(listaContactos);
}

agregarContacto("FranciscoMarcano");
imprimirContacto();
borrarContacto("FranklinMarcano");
imprimirContacto();

//console.log(borrarContacto("FranklinMarcano"))



//console.log(listaContactos);