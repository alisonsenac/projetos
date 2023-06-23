

function buscar(){
    var entrada = document.getElementById("entrada").value.toLowerCase();

    var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;

        fetch(url)
        .then(response => response.json())
        .then(data => {

            var tela = document.getElementById("tela");
            tela.innerHTML = 
            '<h2>'+ data.name +'</h2>'
            +'<img class"pokemon" src="'+ data.sprites.front_default +'" > '
            +'<img class"pokemon" src="'+ data.sprites.back_default +'" > '
            +' <p> id:'+ data.id +'</p> '
            +' <p> Tipo>'+ data.types.map(type => type.type.name) +'</p>'
            +' <p> Habilidades:' + data.abilities.map(ability => ability.ability.name)


        }).catch(error => {

            var tela = document.getElementById("tela");
            tela.innerHTML = '<p> Pokemon não encontrado! </p>';
        })

      

 }
 var contador=0;
 
 function proxímo(){
    contador = contador +1;
    entrada=contador
    var url = "https://pokeapi.co/api/v2/pokemon/"+entrada;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        var tela = document.getElementById("tela");
        tela.innerHTML = 
        '<h2>'+ data.name +'</h2>'
        +'<img class"pokemon" src="'+ data.sprites.front_default +'" > '
        +'<img class"pokemon" src="'+ data.sprites.back_default +'" > '
        +' <p> id:'+ data.id +'</p> '
        +' <p> Tipo>'+ data.types.map(type => type.type.name) +'</p>'
        +' <p> Habilidades:' + data.abilities.map(ability => ability.ability.name)


    }).catch(error => {

        var tela = document.getElementById("tela");
        tela.innerHTML = '<p> Pokemon não encontrado! </p>';
    })
    

}

function anterior(){
    contador = contador - 1;
}