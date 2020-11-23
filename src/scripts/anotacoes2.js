function leDados() {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    }
    else {
        objDados = {
            contatos: [
                {
                    "id": 1,
                    "nome": "Leanne",
                    "data": "21/11/2019",
                    "trabalho": "desempregado",
                    "motivos": "Por conta de problemas familiares",
                    "observacoes": "Paciente inquieto",
                },
                {
                    "id": 2,
                    "nome": "Ervin",
                    "data": "18/11/2019",
                    "trabalho": "desempregado",
                    "motivos": "Por conta de problemas familiares",
                    "observacoes": "Paciente inquieto",
                },
                {
                    "id": 3,
                    "nome": "Clementine",
                    "data": "08/11/2019",
                    "trabalho": "desempregado",
                    "motivos": "Por conta de problemas familiares",
                    "observacoes": "Paciente inquieto",
                },
                {
                    "id": 4,
                    "nome": "Patricia",
                    "data": "22/11/2019",
                    "trabalho": "desempregado",
                    "motivos": "Por conta de problemas familiares",
                    "observacoes": "Paciente inquieto",
                },
            ]
        }
    }

    return objDados;
}

function salvaDados(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function incluirContato() {
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById('campoNome').value;
    let strData = document.getElementById('campoData').value;
    let strTrabalho = document.getElementById('campoTrabalho').value;
    let strMotivos = document.getElementById('campoMotivos').value;
    let strObservacoes = document.getElementById('campoObservacoes').value;
    let novoContato = {
        nome: strNome,
        data: strData,
        trabalho: strTrabalho,
        motivos: strMotivos,
        observacoes: strObservacoes
    };
    objDados.contatos.push(novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    // Atualiza os dados da tela
    imprimeDados();
}

function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();

    for (i = 0; i < objDados.contatos.length; i++) {
        strHtml += `<p> Nome: ${objDados.contatos[i].nome}
         <br> Data da consulta: ${objDados.contatos[i].data} 
         <br> Trabalho: ${objDados.contatos[i].trabalho} 
         <br> Motivos: ${objDados.contatos[i].motivos} 
         <br> Observação ${objDados.contatos[i].observacoes}</p>`
    }


    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById('btnCarregaDados').addEventListener('click', imprimeDados);
document.getElementById('btnIncluirContato').addEventListener('click', incluirContato);

