var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!validaPeso(peso)) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add(`paciente-invalido`);
    };

    if (!validaAltura(altura)) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add(`paciente-invalido`)
    };

  if (alturaEhValida && pesoEhValido) {
        imc=calculaImc(peso, altura)
        tdImc.textContent = imc.toFixed(2);
    };

    function calculaImc(peso, altura){
        var imc=0;
        imc=peso/(altura*altura);
        return imc;
    };

    function validaPeso(peso){
        if(peso>=2 && peso<=950){
            return true;
        } else{
            return false;
        };


    }

    function validaAltura(altura){
        if(altura>0 && altura<=3.00){
            return true;
        } else{
            return false;
        };

    }
};
