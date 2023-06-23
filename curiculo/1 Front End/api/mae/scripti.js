var frase = "Amor de Mãe é aquele amor cheio de carinho e aconchego, proteção e cuidado, presença e amizade, referência e inspiração. Amor de mãe é admiração por tudo que você é e faz, é o amor mais puro e incondicional que existe, é sentir carinho em cada atitude e em cada momento.";

function gerarFrase(){
var texto=document.getElementById("frase");
texto.innerHTML = frase;
}

function lerFrase(){
    var som = window.speechSynthesis;
    var discurso = new SpeechSynthesisUtterance(frase);
    som.speak(discurso);
}