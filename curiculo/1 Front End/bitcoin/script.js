function buscar() {
    var seletor = document.getElementById('moeda').value;
    var resultado = document.getElementById('resultado');


    fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + seletor + '&vs_currencies=brl')
        .then(response => response.json())
        .then(data => {

            var preco = data[seletor].brl;
            resultado.textContent = formatar(preco);
            mudarImagem(seletor);


        }).catch(error => resultado.textContent = error);

}

function formatar(valor) {
    //mascara para formatar valor
    valor = Number(valor).toFixed(2).replace('.', ',');
    valor = "R$ " + valor;

    return valor;
}

function mudarImagem(seletor) {
    var moeda = document.getElementById('imagem');
    if (seletor == "bitcoin") {
        moeda.innerHTML = '<img width="200" src="https://cdn.shopify.com/s/files/1/0676/0477/5227/products/S4d57ccbff6234280817349a576bd3e72R_1024x1024.jpg?v=1674177555">'
    } else if (seletor == "ethereum") {
        moeda.innerHTML = '<img width="300" src="https://media.istockphoto.com/id/1272372614/pt/foto/ethereum-coin-cryptocurrency-top-view-isolated-on-white-white-background.jpg?s=612x612&w=0&k=20&c=I2NftREA1MzN4zxOICDv8U83dseQcbFLpX1JoJr5FvE=">'

    } else if (seletor == "litecoin") {
        moeda.innerHTML = '<img width="200" src= "https://us.123rf.com/450wm/ryzhi/ryzhi1712/ryzhi171200067/91650504-moeda-dourada-da-moeda-cripto-com-s%C3%ADmbolo-do-litecoin-do-ouro-no-anverso-isolado-no-fundo-branco.jpg?ver=6">'

    } else if (seletor == "dogecoin") {
        moeda.innerHTML = '<img width="200" src="https://static.vecteezy.com/ti/vetor-gratis/p3/3590669-dogecoin-crypto-currency-symbol-with-golden-color-gratis-vetor.jpg">'
    }

}
