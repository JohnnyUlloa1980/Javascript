function prueba(evento)
{
    evento.preventDefault();
    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2024-fecha;
    console.log("El nombre es:"+nombre+" tu edad es: "+edad)
    alert("la edad es: "+edad);
}

function saludo(){
    alert("hola");
}
var miform = document.querySelector("#formulario");
miform.addEventListener("submit",prueba);

