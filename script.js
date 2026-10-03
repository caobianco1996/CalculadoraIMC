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
    const altura = Number(campoAltura.value);

    if (!Number.isFinite(peso) || !Number.isFinite(altura) || peso <= 0 || altura <= 0) {
        resultado.textContent = "Informe um peso e uma altura válidos, maiores que zero.";
        campoPeso.focus();
        return;
    }

    const imc = peso / (altura * altura);
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} — ${classificarImc(imc)}.`;
});
