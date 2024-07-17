function prueba(evento)
{
    evento.preventDefault();
    var num1 =parseInt(document.querySelector("#num1").value);
    var resp = num1 *0.92;
    console.log("El resultado de la conversión es: "+resp);
    alert("El valor en Euro es: "+resp);
    document.querySelector("#euro").value=resp;
}

function limpiar()
{
    document.querySelector("#num1").value=" ";
    document.querySelector("#euro").value="0";
}
var miform = document.querySelector("#formulario");
miform.addEventListener("submit",prueba);

