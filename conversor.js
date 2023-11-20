function getTemperature(degree) {
    const celsiusExists = degree.toUpperCase().includes("C")
    const fahrenheitExists = degree.toUpperCase().includes("F")

    //fluxo de erro, se qualquer outro caractere no lugar de F e C
    if (!celsiusExists && !fahrenheitExists){
        throw new Error("Grau inexistente")
    }

    //fluxo ideal, assumindo F -> C
    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = "C"
    
     // fluxo alternativo assumindo C -> F
     if(celsiusExists)
     {
         updateDegree = Number(degree.toUpperCase().replace("C", ""))
         formula = (celsius) => celsius * 9/5 + 32
         degreeSign = "F"
     }
    return formula(updateDegree) + degreeSign
   
}
try {
    console.log(getTemperature("37.5C"))
    console.log(getTemperature("99.5F"))
    console.log(getTemperature("10.0Z"))
   
} catch (error) {
    console.log(error.message)
}

/* 1. creiei uma função cuja entrada é a temperatura e sua escala
2. criei uma constante que lê a escala, C ou F, e retorna se é true ou false
3. criei uma variável que tira a escala da entrada e tranforma a string em number
4. criei uma variável que é uma fórmula de conversão do número (de Celsius para Fahrenheit)
5. criei uma variável definindo a string correspondente à unidade de medida (C ou F)
6. em um "if" testa a outra escala executando os mesmos passos de 3 à 5 só que para a segunda escala possível
7. em um "if" testa a negação das duas escalas, para o caso de escreverem qualquer outra letra que não C ou F
8. a função toda retorna a fórmula do número da temperatura concatenada com a string da escala
9. atravéz dos try imprime a função criada com a temperatura setada
10. captura o erro e retorna a impressão da mensagem de erro para o caso de não escreverem a escala correta */