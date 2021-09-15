
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnDivision = document.getElementById("btnDivision");
var btnMultiplicacion = document.getElementById("btnMultiplicacion");

var resultado = document.getElementById("resultado")

var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

btnSuma.addEventListener("click",function(){

var n1 = inputUno.value;
var n2 = inputDos.value;
resultado.innerHTML = suma(n1,n2);
});

btnResta.addEventListener("click",function(){

var n1 = inputUno.value;
var n2 = inputDos.value;
resultado.innerHTML = resta(n1,n2);
});

btnDivision.addEventListener("click",function(){

    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = division(n1,n2);
    });

btnMultiplicacion.addEventListener("click",function(){

    var n1 = inputUno.value;
    var n2 = inputDos.value;
    resultado.innerHTML = multiplicacion(n1,n2);
});


function suma(n1, n2){

return parseInt(n1) + parseInt(n2);
}

function resta(n1, n2){
    
return parseInt(n1) - parseInt(n2);
}

function division(n1, n2){
        
return parseInt(n1) / parseInt(n2);
}

function multiplicacion(n1, n2){
            
return parseInt(n1) * parseInt(n2);
}