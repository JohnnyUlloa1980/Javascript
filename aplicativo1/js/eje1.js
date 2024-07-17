var titulo = document.querySelector("#titulo");
var boton = document.querySelector("#boton");
var boton2 = document.querySelector("#boton2");
function mensaje(e,mensaje)
{
    titulo.textContent=mensaje;
}



//boton.addEventListener('click',mensaje("hola mundo"));
boton2.addEventListener('click',(evento)=>mensaje(evento,"EUROPA"));
//boton2.addEventListener('click',mensaje2);