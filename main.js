function calcular(){
    var compra = Number(document.getElementById("compra").value)
    var desconto

    if (compra>500){/*condição*/
        /*o que vai acontecer se a compra for maior que 500*/
        desconto = compra * 0.1
    }
    else if(compra>100){/*condição2*/
        /*o que vai acontecer se a compra for maior que 100*/
        desconto = compra * 0.05
    }
    else{
        /*o que vai acontecer se nenhuma condição for verdadeira*/
        desconto = 0
    }

    var final = compra - desconto

    document.getElementById("valor-compra").textContent = "R$ " + compra.toFixed(2).replace(".", ",")
    document.getElementById("valor-desconto").textContent = "R$ " + desconto.toFixed(2).replace(".", ",")
    document.getElementById("valor-final").textContent = "R$ " + final.toFixed(2).replace(".", ",")
}