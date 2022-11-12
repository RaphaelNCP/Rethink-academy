function recebeDados(){
    var nome = document.getElementById('nome');
    var idade = document.getElementById('idade');

    var dados = JSON.parse(localStorage.getItem('dadosPessoa'));

    if(dados == null) {
        localStorage.setItem('dadosPessoa', "[]");
        dados= [];
    }

    var auxRegistro = {
        nome: nome.value,
        idade: idade.value
    }
    
    dados.push(auxRegistro);

    localStorage.setItem('dadosPessoa', JSON.stringify(dados));
    alert('Registro feito!');

    nome.value ="";
    idade.value="";
}

//Essa função armazena os registros de nome e idade na local storage, para limpar o registro basta digitar localStorage.clear();
//no console e recarregar a pagina.

const pessoas = localStorage.getItem('dadosPessoa').normalize('NFD').replace(/[\u0300-\u036f]/g, '').split("},")

//Nessa const armazeno os dados separados em uma array



