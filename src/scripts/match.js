var db_psico = {};
var db_user={};
var usuarioCorrente = {};
var ids={};

var solPendente=[0,0,0];


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
db_psico = JSON.parse(localStorage.getItem('db_psico'));
db_user = JSON.parse(localStorage.getItem('db_user'));
ids = JSON.parse(localStorage.getItem('db_solic'));

function Usuario()
{
    return usuarioCorrente.nome;
}

function psicosN(idNome)
{
    if(db_psico.data[idNome]!=null)
    {
         return db_psico.data[idNome].nome;   
    }
    else
    {
        document.getElementById('bot3').innerHTML = ``;
        return "Sem Sugestões no momento";
    }
}

function psicosS(idNome)
{   
    if(db_psico.data[idNome]!=null)
    return db_psico.data[idNome].sobre;
    else
    return "";
}

function varPendente(id)
{
    let num=1;
    for(let x=0; x<solPendente.length; x++)
    {
        if(solPendente[x]==0 && num==1)
        {
            solPendente[x]=1;
            num=x;
        }
    }

    gerarSol(db_psico.data[id+1].id)

    return num;
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
        if(db_psico.data[x].id == ind)
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
    db_solic.data.pop();

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
        document.getElementById('conx1').innerText = db_psico.data[procID(conect.data[0].psicologo)].nome;;
    }

    
    for(let x=0;x<3;x++)
          {
            document.getElementById(x).innerText = psicosN(x+1);
          }

    for(let x=3;x<6;x++)
          {
            document.getElementById(x).innerText = psicosS(x-2);
          }

}