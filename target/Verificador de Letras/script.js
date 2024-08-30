function contarLetras (texto, letra) {
    let quantidade = 0 // Inicia a contagem a partir do 0 para quantas vezes a letra apareceu durante o texto.

    // Transforma todas as letras do texto inserido em minusculas para que não haja distinção entre o tamanho das letras.
    texto = texto.toLowerCase()
    letra = letra.toLowerCase()

    //  Loop para verificação de caracteres do texto
    for (let caractere = 0; caractere < texto.length; caractere++) { 
        // se a quantidade o caractere verificado foi igual a "letra", adiciona mais um a quantidade.
        if (texto[caractere] === letra) { 
            quantidade++
        }
    }

    return quantidade;
}

    document.querySelector(".button").addEventListener("click", function () {

        const texto = document.querySelector(".text-input").value // retorna o valor inserido no input de texto.
        const letra = document.querySelector(".letter-input").value // retorna o valor inserido no input letra.

        // verifica se foi inserido pelo usuário uma letra. Se sim, executa a função "contarLetras" utilizando letra e texto como argumento e guardando em "resultado". Se não, retorna mensagem solicitando uma letra
        if (letra.length === 1) {
            const resultado = contarLetras(texto, letra)

            document.querySelector(".resultado").textContent = `A letra "${letra}" aparece ${resultado} vezes no texto informado.` // retorna texto com a quantidade de letras foram localizadas.
        } else {
            document.querySelector(".resultado").textContent = "Por favor, insira apenas uma letra para contagem"
        }
    });