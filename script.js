var peso;
var altura;
var resultado;
var imc;


function calcular(event){
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura*altura);

    resultado = document.getElementById('resultado');

    if(imc < 17){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado você está muito abaixo do peso!' 
    }else if (imc >17 && imc <= 18.49){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado você está abaixo do peso!'   
    }else if (imc >= 18.5 && imc < 24.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está no peso ideal!'   
    }else if (imc > 25 && imc <= 29.99){
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está acima do peso ideal!'   
    }else{
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está na obesidade!'   
    }

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}






















// function pedir(){
//     var valor = prompt ("digite um valor de 1 a 4");

//     switch(Number(valor)){
//         case 1:
//             alert("Você pediu 1 = Suco");
//             break;
//         case 2:
//             alert("Você pediu 2 = Agua");
//             break;
//         case 3:
//             alert("Você pediu 3 = Sorvete");
//             break;   
//         case 4:
//             alert("Você pediu 4 = Chamou o Garçom");
//             break;
//         default:
//             alert("Escolha uma opção de 1 a 4");
//             break;           
//     }
// }

// while = enquanto

// var x = 5;

// while (x <= 10){
//     document.write("<br> O valor de x é: " + x);
//     x++
// }


// for = para

// valor = 30;

// for (a=0; a<=valor; a++){
//     document.write("<br> O valor de x é: " + a);
// }

// var area = document.getElementById('area')

// function entrar(){
//     var nome = prompt("Digite seu nome");

//     if(nome === '' || nome === null ){
//         alert("Ops algo deu errado")
//         area.innerHTML = "<h1>Clique no botao para acessar...</h1>"
//     }else{
//         area.innerHTML = "Bem vindo " + nome + " ";

//         let botaoSair = document.createElement("button");
//         botaoSair.innerText = "Sair da conta";
//         botaoSair.onclick = sair;

//         area.appendChild(botaoSair);
//     }
// }

// function sair(){
//     alert("Até mais!");
//     area.innerHTML = "Você saiu!";
// }

// function media(nota1, nota2){
//     var media = (nota1 + nota2)/2;

//     if(media >= 7){
//         console.log("aluno aprovado com a media: " + media)
//     }else{
//         console.log("aluno reprovado com a media: " + media)
//     }
// }

// function aluno(nome, curso){
//     var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso;

//     console.log(mensagem);
// }