const calculoIMC = (peso, altura) => {
    //insira sua lógica aqui do ex. 1 aqui.
    let indiceIMC = peso/( altura*altura)
    return indiceIMC
}

const resultadoIMC = (indiceIMC) => {
    // insira sua lógica do ex.2 aqui.
    // dica, lembre-se que quando queremos que duas condições sejam verdadeiras, usamos o operador &&
    // neste caso, conforme vimos em aula, caso a pessoa precise estar 
    // acima de um imc E abaixo de outro, podemos fazer algo como 
    // if (x > 5 && x < 10) {
    // }
    if (indiceIMC >= 18.5 && indiceIMC < 25){
        return ("Normal")
    }
    else if(indiceIMC >=25 && indiceIMC < 30){
        return ("Sobrepeso")
    }
    else if(indiceIMC >= 30 && indiceIMC < 40){
        return ("Obesidade")
    }
    else if(indiceIMC > 40){
        return ("Obesidade grave")
    }
    else{
        return ("Faixa não definida")
    }
    // não esqueça de retornar o texto da faixa do IMC.
}

const mostrarResultadoIMC = () => {
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    let imc = calculoIMC(peso, altura)
    document.getElementById("resultado").innerText = "O seu IMC é: " + imc.toFixed(2)

    let faixaIMC = resultadoIMC(imc)
    alert("Sua faixa de IMC é: " + faixaIMC)
}
