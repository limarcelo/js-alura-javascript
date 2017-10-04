var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event){
    event.preventDefault(); //previne comportamento padrao do button

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoForm(form);

    var pacienteTr = montaTr(paciente);

    var erros = validapaciente(paciente);
    if(erros.length > 0){
        exibeMenagensDeErro(erros);
        return;
    }

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

});

function exibeMenagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro");
    ul.classList.add("#erro");

    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

    erros.forEach( function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

    erros.clear;

}

function obtemPacienteDoForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function  montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(data, classe) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    return td;
}

function validapaciente(paciente) {

    var erros = [];

    if(!validaPeso(paciente.peso)){
        erros.push("Peso inválido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    return erros;
}