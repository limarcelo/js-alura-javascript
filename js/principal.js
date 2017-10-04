
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista - MS";

var pesoValido = true;
var alturaValida = true;

var pacientes =  document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    if(peso < 0 || peso > 1000){
        pesoValido = false;
        tdImc.textContent = "Peso inválido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(altura < 0 || altura > 3.00){
        alturaValida = false;
        tdImc.textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
   event.preventDefault(); //previne comportamento padrao do button
   console.log("Clicado!");
});

titulo.addEventListener("click", function mostraMensagem(){
    console.log("Olá, eventode click com função anonima!");
});



