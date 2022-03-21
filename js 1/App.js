

// DOM de eventos
document
.getElementById("formulario-producto")
.addEventListener("submit", function (elemento){

    elemento.preventDefault(); // evalua el comportamiento del elemento

    //Obtener valores de formulario
    const nombre = document.getElementById("name").value,
    precio = document.getElementById("precio").value,
    año = document.getElementById("año").value;

    // Crear nuevo objeto producto
    const producto = new Producto(nombre, precio, año);

    // Crear nuevo usuario
    const usuario = new Usuario();

    // Boton de validacion
    if(nombre === " " || precio === " " || año === " ") {
        usuario.showMessage("Por favor insertar nombre de usuario");
    }

    // Guardar producto

    usuario.AddProducto(producto);
    usuario.showMessage("Producto agregado correctamente");
    usuario.resetForm();
    
});

document.getElementById("Lista-producto").addEventListener("click", (elemento) => {
    const usuario = new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

// Producto Clase

export class Producto {
    constructor(nombre, precio, año) {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}


