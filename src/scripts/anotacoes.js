//
//
// Disciplina: Trabalho Interdisciplinar - Aplicações Web
// Professor: Rommel Vieira Carneiro (rommelcarneiro@gmail.com)
//
// Código LoginApp utilizado como exemplo para alunos de primeiro período 

// Obtem os dados doo
let nome = document.getElementById('txt_nome');
let date = document.getElementById('birth_date');
let trabalho = document.getElementById('txt_trab');
let motivos = document.getElementById('txt_motivos');
let observacoes = document.getElementById('txt_obs');

function salvaAnotacao(event) {
    // Cancela a submissão do formulário para tratar sem fazer refresh da tela
    event.preventDefault();

    // Obtem os dados do formulário
    let nomeValue = nome.value.trim();
    let dateValue = date.value.trim();
    let trabalhoValue = trabalho.value.trim();
    let motivosValue = motivos.value.trim();
    let observacoesValue = observacoes.value.trim();

    if (nomeValue == '') {
        alert("Insira o nome do paciente");
        return
    }

    if (dateValue == '') {
        alert("Favor escolher uma data valida");
        return
    }

    if (trabalhoValue == '') {
        alert("Favor preencher o campo sobre o trabalho do paciente");
        return
    }

    if (motivosValue == '') {
        alert("Favor preencher o campo sobre os motivos do paciente");
        return
    }

    if (observacoesValue == '') {
        alert("Favor preencher o campo sobre observações");
        return
    }

    // Adiciona o usuário no banco de dados

    addAnotacao(nomeValue, dateValue, fazValue, motivosValue, observacoesValue);
    alert('Anotações salvas com sucesso');
}

// Associar salvamento ao botao
document.getElementById('btn-salvar').addEventListener('click', salvaAnotacao);

// Página inicial de Anotação
const LOGIN_URL = "anotacoes_psico.html";

// Objeto para o banco de dados de usuários baseado em JSON
var db_user = {};

// Objeto para o usuário corrente
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if (d > 0) {//Use timestamp until depleted
            r = (d + r) % 16 | 0;
            d = Math.floor(d / 16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r) % 16 | 0;
            d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


// Dados de usuários para serem utilizados como carga inicial
const db_contatos_inicial = {
    "data": [
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
};


// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
    // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
    usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
    // Obtem a string JSON com os dados de usuários a partir do localStorage
    var usuariosJSON = localStorage.getItem('db_user');

    // Verifica se existem dados já armazenados no localStorage
    if (!usuariosJSON) {  // Se NÃO há dados no localStorage

        // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
        alert('Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial.');

        // Copia os dados iniciais para o banco de dados 
        db_user = db_contatos_inicial;

        // Salva os dados iniciais no local Storage convertendo-os para string antes
        localStorage.setItem('db_user', JSON.stringify(db_contatos_inicial));
    }
    else {  // Se há dados no localStorage

        // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
        db_user = JSON.parse(usuariosJSON);
    }
};

function addAnotacao(nomeValue, dateValue, trabalhoValue, motivosValue, observacoesValue) {

    // Cria um objeto de usuario para o novo usuario 
    let newId = generateUUID();
    let usuario = {
        "id": newId,
        "nome": nomeValue,
        "data": dateValue,
        "trabalho": trabalhoValue,
        "motivos": motivosValue,
        "observacoes": observacoesValue,
    };

    // Inclui o novo usuario no banco de dados baseado em JSON
    db_user.data.push(usuario);

    // Salva o novo banco de dados com o novo usuário no localStorage
    localStorage.setItem('db_user', JSON.stringify(db_user));

}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();