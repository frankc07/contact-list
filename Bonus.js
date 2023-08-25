function actualizarContacto(contactoActualizado) {
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].id === contactoActualizado.id) {
            listaContactos[i] = contactoActualizado;
            console.log("Contacto actualizado:", listaContactos[i]);
            return;
        }
    }
    console.log("No se encontró un contacto con el ID especificado.");
}

actualizarContacto(nuevoContacto);














