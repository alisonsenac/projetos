var jogador = "x";

function jogar(celula){
    //alert("funcionou!");
    // compra se a celula esta vazia para assim escrever
    if(celula.innerHTML== ""){
            
            //escreve no HTML a letra
            celula.innerHTML = jogador;

            //alterna variavel jogador para a proxima jogada
            if(jogador == "x"){
                jogador = "o";

            }else{
                jogador = "x";

            }
        
    }
}

function reiniciar(){
    window.location.reload();
}

// fulano = 0, ciclano =1, deltrano =2, beltrano=3

const nomes =['fulano','ciclano','deltrano','beltrano','souza','bruno'];

function gerarbatalha(){
 //sorteia um nome da lista, "Math.random vai sortear os itens","math.floor arredonda o numero da lista"
    
     const nome1 = nomes [ Math.floor ( Math.random () * nomes.length ) ];
     const nome2 = nomes [ Math.floor ( Math.random () * nomes.length ) ];

     //enquanto nome1 = nome2, sorteia novamente
     while(nome1 === nome2){
        gerarbatalha();
     }

     //escreva na tela
     document.getElementById('jogador1').textContent = nome1;
     document.getElementById('jogador2').textContent = nome2;

}

function adicionar() {
    var nome = document.getElementById("nome").value;
    nomes.push(nome);
    

    listar();

}

function listar(){
    var listagem = document.getElementById("lista");
    listagem.innerHTML= "";                       //limpar item da tela

    for(var i = 0; i < nomes.length; i++){        //percorre os itens da lista

        var item = document.createElement("li");  //cria elemento <li> para o html
        var nomeitem = nomes[i];                  //guarda na variavel nomeITEM o nome especifico da lista
        item.innerHTML = nomeitem;                //colocar valor dentro do <li>
        listagem.appendChild(item);               //adiciona o <li> na lista do html, dentro do <ul>



    }
}



