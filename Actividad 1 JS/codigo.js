
var btn = document.getElementById("btn");

var resultado = document.getElementById("resultado")

var inputMinimo = document.getElementById("input-minimo");
var inputMaximo = document.getElementById("input-maximo");

btn.addEventListener("click",function(){

var n1 = inputMinimo.value;
var n2 = inputMaximo.value;

resultado.innerHTML = obtenerNumeroAleatorio(n1,n2);
});

function obtenerNumeroAleatorio(n1, n2){

    min = Math.ceil(parseInt(n1));
    max = Math.floor(n2);
return Math.floor(Math.random() * (parseInt(n2) - parseInt(n1) + 1)) + parseInt(n1);
}