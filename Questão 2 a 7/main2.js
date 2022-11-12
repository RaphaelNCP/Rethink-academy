//questão 2

const pessoas = [
    {nome: "Fabiana Araújo", age:33},
    {nome: "Gabriel Gomes", age:25},
    {nome: "Fernando Henrique", age:17},
    {nome: "Ana Luiza", age:2},
    {nome: "Geraldo do Nascimento", age:93},
    {nome: "Miguel Souza", age:70},
    {nome: "Antonia Miguel", age:69},
]


//Questão 3

const nomes = pessoas.map(pessoas => pessoas.nome);

function infoPessoa() {
    const nomeInput = document.querySelector('#input1');
    const valorName = nomeInput.value;
    for (let i=0; i<= pessoas.length; i++)
        if( nomes[i] === valorName) {   
            document.getElementById('infoInput').innerHTML = pessoas[i].nome + ", " + pessoas[i].age + " anos"
        }
}


//Questão 4

function todosOsNomes() {
    document.getElementById('todosNomes').innerHTML = nomes
}

//Questão 6

const idade = pessoas.map(pessoas => pessoas.age)

const maiores = []

function maioresDeIdade() {
    for (let i = 0; i <= pessoas.length; i++){
        if (idade[i] >= 18) {
            maiores.push(pessoas[i].nome)
        }
    }
    document.getElementById('maioresIdade').innerHTML = maiores
    
}

//Questão 7

function calcMedia() {
    var soma = 0
    for (let i in idade) {
        soma += idade[i]
    }
    var media = (soma/idade.length).toFixed(2)
    document.getElementById('mediaCalc').innerHTML = media
}
