function soma() {
    //pega os campos de input da tela
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    //converte de texto para numeros
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    //pega a div que vai exibir o resultado
    var total = document.getElementById("resultado");
    //escreve nessa div o resultado num1+num2
    total.innerHTML = num1 + num2;

}
function subtrair(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    
    var total = document.getElementById("resultado");
    total.innerHTML = num1 - num2;

}
function mutiplicar(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("resultado");
    total.innerHTML = num1 * num2;

}
function dividir(){
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    var total = document.getElementById("resultado");
    total.innerHTML = num1 / num2; 
}
function limpar(){
    var total=document.getElementById("resultado");
    var n1=document.getElementById("n1").value="";
    var n2=document.getElementById("n2").value="";
    total.innerHTML=" ";

}