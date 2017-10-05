var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input", function () {
   console.log(this.value);

   var pacientes = document.querySelectorAll(".paciente");
   for(var i = 0; i < pacientes.length; i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      console.log(nome);

      var expressao = new RegExp(this.value, "i");

      if(!expressao.test(nome) && this.value.length > 0){
         paciente.classList.add("invisivel");
      }else{
         paciente.classList.remove("invisivel");
      }
   }


});
