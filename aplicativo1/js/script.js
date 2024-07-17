// Elementos del DOM
const imagen = document.querySelector('#imagen');
const cambioBoton = document.querySelector('#boton');

// Variables para controlar las imágenes
let indiceImagen = 1;
const totalImagen = 5;

// Función para cambiar la imagen
function changeImage() {
    indiceImagen = (indiceImagen % totalImagen) + 1;
    imagen.src = `imagenes/foto${indiceImagen}.jpg`;
    imagen.alt = `Foto ${indiceImagen}`;
}

// Añadir EventListener al botón
cambioBoton.addEventListener('click', changeImage);
