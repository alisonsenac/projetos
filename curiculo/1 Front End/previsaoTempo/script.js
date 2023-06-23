async function buscarClima(){
    var cidade = document.getElementById("cidade").value
    var chave = '7bca959f82270413715573112d0c2e65';
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cidade+'&appid='+chave+'&units=metric';

    try{
        var resposta = await fetch(url);
        var dado = await resposta.json();

        var resultado = document.getElementById("resultado");
        resultado.innerHTML =
        '<h2> Previsão de tempo para: '+ dado.name+'</h2>'
        +'<p> Temperatura: ' + dado.main.temp + 'c°  </p>'
        +'<p> Temperatura máxima: '+ dado.main.temp_max +'c° </p>'
        +'<p> Temperatura mínima: '+ dado.main.temp_min +'c° </p>'
        +'<p> Temperatura ambiente:'+ dado.main.feels_like+'c° </p>'
        +'<p> Umidade : '+dado.main.humidity+' % </p>'
        +'<p> Velocidade do vento: '+dado.wind.speed+'km/h </p>'
        +'<p> Nuvens: '+dado.clouds.all+'% </p>'
        +'<p> Condição: '+dado.weather[0].description+'</p>'
        + '<img class="imgTempo" src="https://openweathermap.org/img/wn/'+dado.weather[0].icon+'@4x.png">'



    }catch(error){
        var resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Erro ao buscar o Clima: "+error;

    }
}