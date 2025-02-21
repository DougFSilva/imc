const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const botaoCalculadora = document.querySelector(".botao-calcular");
const calculadoraResultado = document.querySelector(".calculadora-resultado");
const resultadoImc = document.querySelector(".resultado-imc");
const comentarioImc = document.querySelector(".comentario-resultado-imc");
const menu = document.querySelector("#menu");
const toogleMenu = document.querySelector(".header-container nav ul");

botaoCalculadora.addEventListener("click", () => {
    calculadoraResultado.style.display = "block";
    const resultado = peso.value / parseFloat(altura.value) ** 2;
    resultadoImc.textContent = `Seu IMC é de ${resultado.toFixed(2)}`;
    if (resultado <= 18.5) {
        resultadoImc.style.color = 'red';
        comentarioImc.textContent = "Abaixo do peso - Consulte um médico para identificar a causa" 
        + "do baixo peso. Pode ser algo natural do seu organismo, mas também pode" 
        + " indicar desnutrição ou outros problemas que precisam de atenção"
    } else if (resultado > 18.5 && resultado <= 24.9){
        resultadoImc.style.color = 'green';
        comentarioImc.textContent = "Peso normal - Excelente! Continue mantendo um estilo de vida" 
        + " ativo e uma dieta balanceada para preservar sua saúde."
    }
    else if (resultado > 24.9 && resultado <= 29.9){
        resultadoImc.style.color = 'orange';
        comentarioImc.textContent = "Sobrepeso - Esta faixa indica uma pré-obesidade, e muitas pessoas" 
        + " já apresentam condições como diabetes e pressão alta. É essencial ajustar seus" 
        + " hábitos e procurar ajuda para evitar a progressão para a obesidade."
    }
    else if (resultado > 29.9 && resultado <= 34.9){
        resultadoImc.style.color = 'red';
        comentarioImc.textContent = "Obesidade Grau I - É hora de se cuidar, independentemente dos resultados" 
        + " dos seus exames. Comece a mudar seus hábitos hoje mesmo, priorizando uma" 
        + " alimentação saudável e buscando orientação nutricional e/ou endócrina"
    }
    else if (resultado > 35 && resultado <= 39.9){
        resultadoImc.style.color = 'red';
        comentarioImc.textContent = "Obesidade Grau II - Mesmo que seus exames pareçam bons, este é o momento" 
        + " de agir. Adote um estilo de vida mais saudável com o apoio de profissionais da saúde"
    } else {
        resultadoImc.style.color = 'red';
        comentarioImc.textContent = "Obesidade Grau III - A probabilidade de sérios problemas de saúde é altíssima." 
        + " É crucial buscar tratamento imediato."
    }
});

menu.addEventListener("click", () => {
    toogleMenu.classList.toggle("active");
})