# Calculadora de IMC — página web

Página simples em HTML, CSS e JavaScript para calcular o Índice de Massa Corporal a partir do peso em quilogramas e da altura em metros. Não requer instalação nem dependências.

## Executar

Abra index.html diretamente em um navegador. Para servir a pasta localmente com Python:

~~~sh
python -m http.server 8000
~~~

Depois visite http://localhost:8000 e abra o arquivo index.html.

## Como verificar

Não há framework ou script de testes automatizados. Faça estes testes manuais:

1. Informe peso 65 e altura 1,70; confirme que o resultado é exibido com duas casas decimais.
2. Informe valores vazios, zero, negativos ou texto; confirme que a entrada é rejeitada com uma mensagem.
3. Teste decimais com vírgula e ponto.

## Tecnologias e observação

HTML, CSS e JavaScript sem dependências externas. As faixas são referências gerais para adultos; o IMC não é diagnóstico nem substitui avaliação profissional.