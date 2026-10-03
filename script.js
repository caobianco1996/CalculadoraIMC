const formulario = document.getElementById("formulario-imc");
const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

function classificarImc(imc) {
    if (imc < 17) return "Muito abaixo do peso";
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso adequado";
    if (imc < 30) return "Sobrepeso";
    if (imc < 35) return "Obesidade grau I";
    if (imc < 40) return "Obesidade grau II";
    return "Obesidade grau III";
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const peso = Number(campoPeso.value);
    const altura = Number(String(campoAltura.value).replace(",", "."));

    if (!Number.isFinite(peso) || peso < 1 || peso > 500) {
        resultado.textContent = "Informe um peso entre 1 e 500 kg.";
        campoPeso.focus();
        return;
    }
    if (!Number.isFinite(altura) || altura < 0.5 || altura > 2.8) {
        resultado.textContent = "Informe uma altura entre 0,50 e 2,80 m.";
        campoAltura.focus();
        return;
    }

    const imc = peso / (altura * altura);
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} — ${classificarImc(imc)}.`;
});
