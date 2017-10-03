
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista - MS";

var pesoValido = true;
var alturaValida = true;

var paciente =  document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

console.log(paciente);

//imprimindo os valores
console.log(peso);
console.log(altura);
//---

var tdImc = paciente.querySelector(".info-imc");


if(peso < 0 || peso > 1000){
    pesoValido = false;
    tdImc.textContent = "Peso inválido";
}

if(altura < 0 || altura > 3.00){
    alturaValida = false;
    tdImc.textContent = "Altura inválida";
}

if(pesoValido && alturaValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc ;
}



