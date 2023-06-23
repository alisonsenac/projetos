alert('ola mundo');

var numero = 25;

if(numero > 10){
    alert('numero maior que 10');
}else if(numero < 0) {
    //alert('numero invalido');
}else{
    alert('numero menor que 10');
}

var contador = 0;

//enquanto contador for menorque 5 executa
while(contador < 5){
    alert ('numero:'+ contador);
    contador = contador + 1;
}

//criacao de lista -fulano 0, Ciclano 1, Deltrano 2
var nomes = ['fulano','ciclano','Deltrano'];
// alert(nomes[0]);

//nomes.lenght = 3
for(contador=0; contador < nomes.length; contador++){
    alert(nomes[contador]);
    
    if(nomes[contador] === 'ciclano'){
        alert('pessoa encontrada!')
    }

}

//funçao

function baixarestoque(){
    alert("baixou estoque!");
}

function movimentarcaixa(){
    alert("caixa movimentado");
}

function fazervenda(){
    baixarestoque();
    movimentarcaixa();

    //DOM -
    var titulo = document.getElementById('texto');
    titulo.innerHTML = 'novo texto';
}

//objeto
var pessoa = { idade:10, nome: 'Ricardo', altura: 1.50 };
alert(pessoa.nome);

