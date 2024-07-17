function prueba(evento)
{
    evento.preventDefault();
    var num1 =parseInt(document.querySelector("#num1").value);
    var num2 =parseInt(document.querySelector("#num2").value);
    var resp = num1 + num2;
    console.log("El resultado de la suma es: "+resp);
    alert("la suma es: "+resp);
    document.querySelector("#suma").value=resp;
}

function limpiar()
{
    document.querySelector("#num1").value=" ";
    document.querySelector("#num2").value=" ";
    document.querySelector("#suma").value="0";
}
var miform = document.querySelector("#formulario");
miform.addEventListener("submit",prueba);

