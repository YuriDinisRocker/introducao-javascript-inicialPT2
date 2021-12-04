var botão= document.querySelector(`#adicionar-paciente`)

var msgErro=document.querySelector(`#Mensagem-erro`)

botão.addEventListener(`click`, function(event){

    event.preventDefault();


    var addForm= document.querySelector(`#form-adiciona`);


    var addPaciente=adicionaPaciente(addForm);


    var paciente=montaTd(addPaciente);


    if(addPaciente.nome.length==0){
      console.log(`Nome errado`)
      window.alert(`Paciente sem nome, favor checar.`)
      return;
    }


    if (!validaPeso(addPaciente.peso)) {
      console.log("Paciente inválido");
      window.alert(`Peso inválido`)
      return
    };

    if (!validaAltura(addPaciente.altura)) {
      console.log("Paciente inválido!");
      window.alert(`Altura inválido`)
      return
    };


    var tabela= document.querySelector("#tabela-pacientes");


    tabela.appendChild(paciente);


    function adicionaPaciente(form){

        var pacienteForm={
            nome: form.nome.value,
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc:calculaImc(form.peso.value, form.altura.value).toFixed(2)
        };
        return pacienteForm;
    };


    function montaTd(paciente){

        var pacienteTr=document.createElement(`tr`);
        pacienteTr.classList.add("paciente")


        var nomeTd=document.createElement(`td`);
        nomeTd.classList.add(`info-nome`)

        var pesoTd=document.createElement(`td`);
        pesoTd.classList.add(`info-peso`)

        var alturaTd=document.createElement(`td`);
        alturaTd.classList.add(`info-altura`)

        var gorduraTd=document.createElement(`td`);
        gorduraTd.classList.add(`info-gordura`)

        var imcTd=document.createElement(`td`);
        imcTd.classList.add(`info-imc`)


        nomeTd.textContent=paciente.nome;
        pesoTd.textContent=paciente.peso;
        alturaTd.textContent=paciente.altura;
        gorduraTd.textContent=paciente.gordura;
        imcTd.textContent=paciente.imc;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);




      if (alturaEhValida && pesoEhValido) {
            imc=calculaImc(peso, altura)
            tdImc.textContent = imc.toFixed(2);
            msgErro.textContent=null
        };

        return pacienteTr;



    }

    addForm.reset();


});
