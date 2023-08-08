//definir área do canvas
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

//configurar raquete
var raqueteAltura = 10;
var raqueteLargura = 75;
var raqueteX = (canvas.width - raqueteLargura) / 2; //centralizar raquete
var velocidadeRaquete = 7;

//configurar a bola
var bolaRadius = 10;
var bolaX = canvas.width / 2;
var bolaY = canvas.height - 30;
var bolaDX = 4;             //direção da bola em x (esquerda / direita)           
var bolaDY = -2;            //direção de bola em y (acima / baixo)

var tijolosPorLinha = 3;
var tijolosPorColuna = 6;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspaçamento = 10;
var espaçamentoSuperiorQudro = 30;
var espaçamentoEsquerdoQuadro = 30;
var tijolos = []; //lista com os tijolos

var totalPontuação = tijolosPorLinha * tijolosPorColuna * 10;
var pontuação = 0;

function facil() {
    raqueteLargura = 90;
    tijolosPorLinha = 2;
    tijolosPorColuna = 5;
    tijoloLargura = 90;
    tijoloAltura = 40;
    bolaRadius = 20;  //tamanho da bola
    bolaDX = 2;       //velocidade da bola direita/esquerda
    bolaDY = -1;      //velocidade da bola acima/baixo
    totalPontuação = tijolosPorLinha * tijolosPorColuna * 10;
    pontuação = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30;
    iniciarTijolos();

}



function medio() {
    raqueteLargura = 70;
    tijolosPorLinha = 4;
    tijolosPorColuna = 8;
    tijoloLargura = 70;
    tijoloAltura = 25;
    bolaRadius = 10;
    bolaDX = 1;
    bolaDY = -3;
    totalPontuação = tijolosPorLinha * tijolosPorColuna * 10;
    pontuação = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30;
    iniciarTijolos();

}

function dificil() {
    raqueteLargura = 60;
    tijolosPorLinha = 4;
    tijolosPorColuna = 10;
    tijoloLargura = 50;
    tijoloAltura = 30;
    bolaRadius = 10;  //tamanho da bola
    bolaDX = 2;       //velocidade da bola direita/esquerda
    bolaDY = -3;      //velocidade da bola acima/baixo
    totalPontuação = tijolosPorLinha * tijolosPorColuna * 10;
    pontuação = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30
    iniciarTijolos();
}
function impossivel() {
    raqueteLargura = 50;
    tijolosPorLinha = 5;
    tijolosPorColuna = 15;
    tijoloLargura = 50;
    tijoloAltura = 40;
    bolaRadius = 10; 
    bolaDX = 5;       
    bolaDY = 5;     
    totalPontuação = tijolosPorLinha * tijolosPorColuna * 10;
    pontuação = 0;
    bolaX = canvas.width / 2;
    bolaY = canvas.height - 30
    iniciarTijolos();
}



function iniciarTijolos(){
    //dedicado apena a inicialização dos tijolos 
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        tijolos[coluna] = [] //0 1 2 3 4 5 
    
        for (var linha = 0; linha < tijolosPorLinha; linha++) {
    
            tijolos[coluna][linha] = { x: 5, y: 5, ativo: 1 }
            //x é a posição esquerda/direita no canva
            //y é a posição acim/abaixo no canva
            //ativo, determina se o tijolo aparece ou não, 1 ou 0
        }
    
    }
 }
    iniciarTijolos();
var setaDireita = false;
var setaEsquerda = false;

//movimentação da raquete - detcta descer e subir da tecla
document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

function descerDaTecla(tecla) {
    //se o valor = "direita" ||ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = true; //ativa variavel setaDireita

        //se o valor = "esquerda" ||ou valor "setaEsquerda"
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = true; //ativa variavel setaEsquerda
    }

}

function subirDaTecla(tecla) {
    //se o valor = "direita" ||ou valor = "setaDireita"
    if (tecla.key === "Right" || tecla.key === "ArrowRight") {
        setaDireita = false; //ativa variavel setaDireita

        //se o valor = "esquerda" ||ou valor "setaEsquerda"
    } else if (tecla.key === "Left" || tecla.key === "ArrowLeft") {
        setaEsquerda = false; //ativa variavel setaEsquerda
    }

}

function desenharRaquete() {
    desenho.beginPath();    //iniciar desenho
    desenho.rect(raqueteX, canvas.height - raqueteAltura, raqueteLargura, raqueteAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();

}

function desenharBola() {
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}

function desenharTijolos() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            if (tijolos[coluna][linha].ativo == 1) { //verifica se tijolo está ativo para desenha-lo

                var tijoloX = (coluna * (tijoloLargura + tijoloEspaçamento) + espaçamentoEsquerdoQuadro);
                var tijoloY = (linha * (tijoloAltura + tijoloEspaçamento) + espaçamentoSuperiorQudro);

                tijolos[coluna][linha].x = tijoloX;
                tijolos[coluna][linha].y = tijoloY;

                desenho.beginPath();
                desenho.rect(tijoloX, tijoloY, tijoloLargura, tijoloAltura);
                desenho.fillStyle = "green";
                desenho.fill();
                desenho.closePath();

            }

        }
    }
}

function detectarColisao() {
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            var tijolo = tijolos[coluna][linha];

            if (tijolo.ativo === 1) {

                if (bolaX + bolaRadius > tijolo.x
                    && bolaX - bolaRadius < tijolo.x + tijoloLargura
                    && bolaY + bolaRadius > tijolo.y
                    && bolaY - bolaRadius < tijolo.y + tijoloAltura) {
                    bolaDY = -bolaDY;
                    tijolo.ativo = 0;

                    tela = document.getElementById("ponto");
                    pontuação = pontuação + 10;
                    tela.innerHTML = "Score: " + pontuação;
                    gerrarEfeitoSonoro('moeda.mp3');

                    if (pontuação === totalPontuação) {
                        vitoria();
                    }


                }

            }
        }
    }
}

function gameover() {
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block";
    bolaDX = 0;
    bolaDY = 0;
}


function reiniciar() {
    document.location.reload();

}

//exibir na tela mensagem de vitória
function vitoria() {
    var mensagem = document.getElementById("vitoria");
    mensagem.style.display = "block";
    bolaDX = 0;
    bolaDY = 0;
}

function gerrarEfeitoSonoro(som) {
    //criar contexto de audio
    var contexto = new (window.AudioContext)();
    //fazer uma requisição para carregar o arquivo de som
    var requisicao = new XMLHttpRequest();
    requisicao.open('GET', som, true);
    requisicao.responseType = 'arraybuffer'; //armazenar na memoria

    requisicao.onload = function () {
        //decoficar o arquivo de som
        contexto.decodeAudioData(requisicao.response, function (buffer) {
            var fonte = contexto.createBufferSource();
            fonte.buffer = buffer;
            //conectar a saida de som
            fonte.connect(contexto.destination);
            fonte.start(0); //executa som
        });
    }
    requisicao.send();


}

function desenhar() {
    desenho.clearRect(0, 0, canvas.width, canvas.height); //limpa o frame anterior
    desenharRaquete();
    desenharBola();
    desenharTijolos();
    detectarColisao();

    //analisar colisao eixo X, colisao direita/esquerdo
    if (bolaX + bolaDX > canvas.width - bolaRadius || bolaX + bolaDX < bolaRadius) {
        bolaDX = - bolaDX; //inverte direção direita/esquerda
        gerrarEfeitoSonoro('bordas.mp3');
    }

    //analisa colisao com parte de cima
    if (bolaY + bolaDY < bolaRadius) {
        bolaDY = -bolaDY; //inverte colisao ao bater em cima
        gerrarEfeitoSonoro('bordas.mp3');

    } else if (bolaY + bolaDY > canvas.height - bolaRadius - raqueteAltura) {

        //se for maior que o começo da raquete e menor que o final da raquete
        if (bolaX > raqueteX && bolaX < raqueteX + raqueteLargura) {
            gerrarEfeitoSonoro('raquete.mp3');
            bolaDY = -bolaDY;           //inverte direção
        } else {
            // document.location(); //reinicia
            gameover();
        }

    }


    //se setaDireita estiver ativo &&"e" raqueteX < largura dp canvas - raqueteLargura
    if (setaDireita === true && raqueteX < canvas.width - raqueteLargura) {
        raqueteX = raqueteX + velocidadeRaquete;

        // se setaEsquerda estiver ativo &&"e" raqueteX > 0"começo do canvas" 
    } else if (setaEsquerda === true && raqueteX > 0) {
        raqueteX = raqueteX - velocidadeRaquete; //anda para esquerda
    }

    bolaX = bolaX + bolaDX; // faz bola andar para a direita e para esquerda
    bolaY = bolaY + bolaDY; // faz a bola andar para cima/baixo 


    requestAnimationFrame(desenhar); //atualizar tela de forma suave
}
desenhar(); // chama função desenhar
