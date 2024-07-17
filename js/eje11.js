function prueba(evento)
{
    evento.preventDefault();
    var nombre = document.querySelector("#nombre").value;
    var fecha = document.querySelector("#fecha").value;
    var edad = 2024-fecha;
    document.querySelector("#edad").value=edad;
    console.log("El nombre es:"+nombre+" tu edad es: "+edad)
    alert("la edad es: "+edad);
}

function borrar(){
    document.querySelector("#nombre").value=" ";
    document.querySelector("#fecha").value=" ";
    document.querySelector("#edad").value="0";
}
var miform = document.querySelector("#formulario");
miform.addEventListener("submit",prueba);

