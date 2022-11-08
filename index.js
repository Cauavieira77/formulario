function calcular(){
    var nome = document.getElementById("nome").value;
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;

    var media = parseFloat(Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4

    document.getElementById('txtResultado').setAttribute("value", media);

    if (media >="70"){
        document.getElementById('txtaprovado').setAttribute("value", "Aprovado");
    } else if (media <"40"){
        document.getElementById('txtaprovado').setAttribute("value", "Reprovado");
    } else {
        document.getElementById('txtaprovado').setAttribute("value", "Precisa fazer final")
        let analisar = Number((50 - (media * 6)) / 4)
        document.getElementById('lb2').innerHTML = 'Você precisa de: '+analisar;

    }

} 