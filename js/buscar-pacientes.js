console.log("JS OK");
var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function () {
    var xhr = new XMLHttpRequest();
    var erroAjax = document.querySelector("#erro-ajax");

    xhr.open("GET", "http://localhost:3000/data");

    xhr.addEventListener("load", function () {

        if(xhr.status == 200){
            var pacientes = JSON.parse(xhr.responseText);

            erroAjax.classList.add("invisivel");

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{

            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});