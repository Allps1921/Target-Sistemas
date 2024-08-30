// Função que define o número máximo para o calculo da sequência de Fibonacci.
function valorInserido(n) {
    let sequenciaFibonacci = [0, 1]; //define os valores iniciais da sequência de Fibonacci.
    let proximoValor = sequenciaFibonacci[0] + sequenciaFibonacci[1]; // realiza a soma dos valores iniciais da sequência de Fibonacci.

    // loop para manter o cálculo até que o valor seguinte seja maior que o valor inserido.
    while (proximoValor <= n) {
        sequenciaFibonacci.push(proximoValor); // Adiciona o proximo valor para a sequência.
        proximoValor = sequenciaFibonacci[sequenciaFibonacci.length - 1] + sequenciaFibonacci[sequenciaFibonacci.length - 2]; // Atualiza "proximoValor" para que seja a soma dos dois últimos números da sequência.
    }
    return sequenciaFibonacci;
}

// Função que verifica se um número pertence à sequência de Fibonacci.
function numeroFibonacci(n) {
    const sequencia = valorInserido(n); // Gera a sequência de Fibonacci até o número definido e armazena o valor na constante sequencia
    return sequencia.includes(n); // retorna como true ou false se o valor inserido consta na sequência. Se constar, retorna "true". Se não, retorna "false".
    }

    // Adiciona evento de clique ao botão para verificação
document.querySelector(".button").addEventListener("click", function() {
    const input = document.querySelector(".container-input input").value; // retorna o valor inserido no input.
    const numero = parseInt(input); // converte o texto inserido para número inteiro.
    const resultado = document.querySelector(".resultado"); // retorna o local onde será exibido resultado utilizando DOM

    if (isNaN(numero)) { // verificação se o texto informado foi transformado em um número inteiro. Caso não seja, retorna mensagem informando que seja inserido apenas números inteiros. Caso seja, retorna a informação se o número informado pertence a sequência de Fibonacci ou não.
        resultado.textContent = "Por favor, insira um número inteiro válido.";
    } else {
        if (numeroFibonacci(numero)) {
            resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
        } else {
            resultado.textContent = `O número ${numero} não pertence à sequência de Fibonacci.`;
        }
    }
});
