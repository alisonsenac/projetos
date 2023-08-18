//SEM ORIENTAÇÃO A OBJETOS
var nome1 = 'Paula';
var nome2 = 'Juliana';
var nome3 = 'Alana';

var idade1 = 25;
var idade2 = 30;
var idade3 = 40;

function falar(nome, idade) {
    alert('Sem Orientação a objetos: Olá sou ' + nome + ' e tenho ' + idade + ' anos');
}
falar(nome1, idade1);
falar(nome2, idade2);
falar(nome3, idade3);


//COM ORIENTAÃO A OBJETOS
//Classe
class Pessoa {                   //classe pessoa
    constructor(nome, idade) {   //construtor, quem contruir o objeto, onde voc~e passa os parametros(dados)
        this.nome = nome;       //atributo nome
        this.idade = idade;     //atributo idade

    }
    falar() {                    //método para falar
        alert("Olá meu nome é " + this.nome + " e tenho " + this.idade + "anos")
    }
}
//Istanciando Objeto
var pessoa1 = new Pessoa('Astolfo', 71);  //objeto pessoa1
var pessoa2 = new Pessoa('Malvina', 50);  //objeto pessoa2
var pessoa3 = new Pessoa('Muriel', 60);   //objeto pessoa3
pessoa1.falar();
pessoa2.falar();
alert('Olá ' + pessoa3.nome);

//HERANÇA E POLIMORFISMO
//criando classe PAI
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    fazerBarulho() {
        alert("Fazendo barulho genérico!");
    }
}

//CRIANDO CLASSES FILHAS DE ANIMAL

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    fazerBarulho() {
        alert("Cachorro Latindo!");
    }
}
class Gato extends Animal {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
    fazerBarulho() {
        alert("Gato Miando!");
    }
}

var objetoCachorro = new Cachorro('Fred','Schnauzer');
alert(objetoCachorro.nome);
alert(objetoCachorro.raca);
objetoCachorro.fazerBarulho(); //latindo

var objetoGato = new Gato('Sininho', 'cinza');
objetoGato.nome = "Garfield"; //alterando atribuitos publicos
objetoGato.cor = "Laranja";   //alterando atribuitos publicos
alert(objetoGato.nome);
alert(objetoGato.cor);
objetoGato.fazerBarulho(); //miando

//Encapsulamento, modificador de acesso
class contaBancaria {
    constructor(saldo){
        this._saldo = saldo; // "_" significa privado
    }
    get obterSaldo(){             //obter o saldo
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
    }
    sacar(valor){
        if(valor<=this._saldo){
            this._saldo = this._saldo - valor;
        } else {
            alert("Valor maior que o saldo!")
        }
    }
}

var minhaConta = new contaBancaria(20000);
alert(minhaConta.obterSaldo);
minhaConta.depositar(100);
alert(minhaConta.obterSaldo);
minhaConta.sacar(10000);
alert(minhaConta.obterSaldo);



