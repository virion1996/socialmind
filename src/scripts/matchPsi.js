var db_user={};
var usuarioCorrente = {};
var ids={};

var db_solic=
{
    "data" : []
};
var conex=
{
    "data":[]
};


//Carregar local storage
usuarioCorrente = JSON.parse(sessionStorage.getItem('usuarioCorrente'));
db_user = JSON.parse(localStorage.getItem('db_user'));
ids = JSON.parse(localStorage.getItem('db_solic'));

function Usuario()
{
    return usuarioCorrente.nome;
}

function gerarSol(psico)
{
    var solicit = 
    {
        "solicitante" : usuarioCorrente.id,
        "solicitado" : psico
    };

    db_solic.data.push(solicit);
    localStorage.setItem('db_solic',JSON.stringify(db_solic));
}

function procID(ind)
{   
    let idTemp;
    for(let x=0; x<db_user.data.length; x++)
    {
        if(db_user.data[x].id == ind)
        {
            idTemp=x;
        }
    }

    return idTemp;
}

function aceitarCox(indice)
{
    var aceite = 
    {
        "psicologo" : usuarioCorrente.id,
        "paciente" : ids.data[indice].solicitante
    };

    conex.data.push(aceite);
    localStorage.setItem('conex',JSON.stringify(conex));
    localStorage.removeItem('db_solic');

}

function userSolic()
{
    
    return db_user.data[procID(ids.data[0].solicitante)].nome;
}

function userSobreSolic()
{
    return db_user.data[procID(ids.data[0].solicitante)].sobre;
}

function conexoes()
{ 
    let conect;
    if(JSON.parse(localStorage.getItem('conex')) != null)
    {
        conect = JSON.parse(localStorage.getItem('conex')) ; 
        document.getElementById('conx1').innerText = db_user.data[procID(conect.data[0].paciente)].nome;;
    }

    if(JSON.parse(localStorage.getItem('db_solic')) == null)
    document.getElementById('bot1').innerHTML = ``;
    
}


