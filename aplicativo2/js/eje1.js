var titulo = document.querySelector("#titulo");
var mensaje = document.querySelector("#mensaje");
var boton = document.querySelector("#boton");

function cambiar_texto()
{
    titulo.textContent="España";
    mensaje.textContent="España, país de la península ibérica de Europa, incluye 17 regiones autónomas con diversas características geográficas y culturales. En Madrid, su capital, se encuentra el Palacio Real y el Museo del Prado, que alberga obras de maestros europeos. Segovia tiene un castillo medieval (el Alcázar) y un acueducto romano intacto. La capital de Cataluña, Barcelona, se caracteriza por las obras modernistas extravagantes de Antoni Gaudí, como el templo de la Sagrada Familia"
}

boton.addEventListener("click",cambiar_texto);