console.log("JS OK");
var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:3000/data");

    xhr.addEventListener("load", function () {
        var pacientes = JSON.parse(xhr.responseText);

        pacientes.forEach(function (paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});