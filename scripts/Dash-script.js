var db_contatos_inicial = {
    reg: [
        {
            id: 1,
            nome: "Leanne",
            sobrenome: "Graham",
            cep: "51346587",
            anonimato: "Sim",
            email: "Sincere@april.biz",
            celular: "1-770-736-8031",
            sobre: "hildegard.org",
            valor: "gratuito",
            senha: "Leanne",
        },
        {
            id: 2,
            nome: "Ervin",
            sobrenome: "Howell",
            cep: "13468572",
            anonimato: "Não",
            email: "Shanna@melissa.tv",
            celular: "010-692-6593",
            sobre: "anastasia.net",
            valor: "gratuito",
            senha: "Ervin",
        },
        {
            id: 3,
            nome: "Clementine",
            sobrenome: "Bauch",
            cep: "12345678",
            anonimato: "Não",
            email: "Nathan@yesenia.net",
            celular: "1-463-123-4447",
            sobre: "ramiro.info",
            valor: "gratuito",
            senha: "Clementine",
        }
    ]
}

var db_dashdata_inical = {
    data:[
        {
            id: 1,
            photo: "/user_imgs/userphoto-1.jpeg",
            status: "1",
            message: "Quem diria que um dia teria novos motivos pra sorrir!"
        },
        {
            id: 2,
            photo: "/user_imgs/userphoto-2.jpeg",
            status: "2",
            message: "Estou o dia inteiro ocupada."
        },
        {
            id: 3,
            photo: "/user_imgs/userphoto-3.jpeg",
            status: "3",
            message: "A espera de um recomeço em minha vida."
        }
    ]
}

/* var db_notificacoes_inicial = {
    usernotify:[
        {

        }
    ]
} */

// objeto do banco de dados de users em json
var db_userreg = {};
var db_userdata= {};
var drop_reference= [];

initLoginApp();

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login

function initLoginApp() {
    
    userJSON = sessionStorage.getItem('usuarioCorrente');
    if (userJSON)
    {
        user = JSON.parse(usuarioCorrenteJSON);
    }

        db_userreg = db_contatos_inicial;
        db_userdata= db_dashdata_inical;
        localStorage.setItem('db_userreg', JSON.stringify(db_contatos_inicial));
        localStorage.setItem('db_userdata', JSON.stringify(db_dashdata_inical));    
};

onload = () =>
{
    setDropdownUsers();
    setDropsEvent();
}

function setDropdownUsers()
{
    for(let i=0; i< db_userreg.reg.length; i++)
    {
        document.getElementById('users_dropdown-menu').innerHTML += 
        '<a id="user_'+db_userreg.reg[i].id+'" class="dropdown-item" href="#">'+db_userreg.reg[i].nome+'</a>';

        drop_reference[i]= db_userreg.reg[i].id;
    }
}

/*
    Seleciona os elementos do menu dropdown e designa uma função
    de procupar pelo usuário toda vez que algum item for clicado
*/
function setDropsEvent()
{
    let p= document.querySelectorAll('#users_dropdown-menu> a');
    p.forEach((item, index) => (item.onclick= ()=> getUser(index)));
}

/*
    Procura o usuário comparando o id da referência com a id no vetor
    data e salva os dados do usuário na variável usuário corrente;
*/
function getUser(index)
{
    let user_reg;
    let user_data;

    for(let i=0; i< db_userreg.reg.length; i++)
    {
        if(db_userreg.reg[i].id== drop_reference[index])
        {
            user_reg= db_userreg.reg[i];
            user_data= db_userdata.data[i];
            break;
        }
    }
    setUserPanel(user_reg, user_data);
}

function setUserPanel(user, data)
{
    if(document.querySelector('#sidebar_avatar'))
    {
        sidebar_avatar.remove();
    }

    sidebar_photoframe.innerHTML= '<img id="sidebar_userphoto" src="'+data.photo+'" alt="user_photo">';
    sidebar_username.innerHTML= user.nome+' '+user.sobrenome;
    sidebar_message.innerHTML= '\"'+data.message+'\"';
    setStatus(data.status);
}

function setStatus(status)
{
    if(status== 1)
    {
        sidebar_statusicon.style.backgroundColor = "#20ff20";
        sidebar_statustext.innerHTML= "Online";
    }
    else if(status== 2)
    {
        sidebar_statusicon.style.backgroundColor = "#fc3d03";
        sidebar_statustext.innerHTML= "Não pertubar";
    }
    else if(status== 3)
    {
        sidebar_statusicon.style.backgroundColor = "#808080";
        sidebar_statustext.innerHTML= "Offline";
    }
}
