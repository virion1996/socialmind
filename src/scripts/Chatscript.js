var db_usuarios_inicial = 
{
    reg:
    [
        {
            id: "1",
            nome: "Leanne",
            sobrenome: "Graham",
            cep: "51346587",
            anonimato: "Sim",
            email: "Sincere@april.biz",
            celular: "1-770-736-8031",
            sobre: "hildegard.org",
            valor: "gratuito",
            senha: "Leanne",
            photo: "/user_imgs/userphoto-1.jpeg",
            status: "1",
            message: "Quem diria que um dia teria novos motivos pra sorrir!"
        },
        {
            id: "2",
            nome: "Ervin",
            sobrenome: "Howell",
            cep: "13468572",
            anonimato: "Não",
            email: "Shanna@melissa.tv",
            celular: "010-692-6593",
            sobre: "anastasia.net",
            valor: "gratuito",
            senha: "Ervin",
            photo: "/user_imgs/userphoto-2.jpeg",
            status: "2",
            message: "Estou o dia inteiro ocupada."
        },
        {
            id: "3",
            nome: "Clementine",
            sobrenome: "Bauch",
            cep: "12345678",
            anonimato: "Não",
            email: "Nathan@yesenia.net",
            celular: "1-463-123-4447",
            sobre: "ramiro.info",
            valor: "gratuito",
            senha: "Clementine",
            photo: "/user_imgs/userphoto-3.jpeg",
            status: "3",
            message: "A espera de um recomeço em minha vida."
        }
    ]
};


var db_psicologos_inicial =
{
    reg:
    [
        {
            id: "4",
            nome: "Nicholas",
            sobrenome: "Runolfsdottir",
            cep: "12302457",
            anonimato: "Sim",
            email: "Sherwood@rosamond.me",
            celular: "586.493.6943",
            sobre: "jacynthe.com",
            sobre_job: "jacynthe.com",
            valor: "ate 100 reais",
            senha: "Nicholas",
            photo: "/user_imgs/userphoto-4.jpeg",
            status: "1",
            message: "Psicologo e psicoterapeuta"
        },
        {
            id: "5",
            nome: "Glenna",
            sobrenome: "Reichert",
            cep: "52085674",
            anonimato: "Sim",
            email: "Chaim_McDermott@dana.io",
            celular: "(775)976-6794",
            sobre: "conrad.com",
            sobre_job: "conrad.com",
            valor: "mais de 100 reais",
            senha: "Glenna",
            photo: "/user_imgs/userphoto-5.jpeg",
            status: "2",
            message: "A sua disposição para poder te ajudar!"
        },
        {
            id: "6",
            nome: "Clementina",
            sobrenome: "DuBuque",
            cep: "21652012",
            anonimato: "Sim",
            email: "Rey.Padberg@karina.biz",
            celular: "024-648-3804",
            sobre: "ambrose.net",
            sobre_job: "ambrose.net",
            valor: "mais de 100 reais",
            senha: "Clementina",
            photo: "/user_imgs/userphoto-6.jpeg",
            status: "3",
            message: "De segunda a sexta de 8 as 19 horas"
        }
    ]
};


var usuariocorrente=
{
    id: "1",
    nome: "Leanne",
    sobrenome: "Graham",
    cep: "51346587",
    anonimato: "Sim",
    email: "Sincere@april.biz",
    celular: "1-770-736-8031",
    sobre: "hildegard.org",
    valor: "gratuito",
    senha: "Leanne",
    photo: "/user_imgs/userphoto-1.jpeg",
    status: "1",
    message: "Quem diria que um dia teria novos mo1605878006445tivos pra sorrir!"
};


var db_chatmsg_inicial=
{
    conversations:
    [
        new Cv("1","4",
            [
                new Msg("1", 1605877993008, "Hello world!"),
                new Msg("4", 1605878006445, "Hello!"),
                new Msg("4", 1605878006565, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta odio voluptates fugit consequatur animi accusantium sit, vel exercitationem aut?"),
                new Msg("1", 1605878006565, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta odio voluptates fugit consequatur animi accusantium sit, vel exercitationem aut?"),
                new Msg("1", 1605878006565, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta odio voluptates fugit consequatur animi accusantium sit, vel exercitationem aut?"),
                new Msg("4", 1605878006565, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta odio voluptates fugit consequatur animi accusantium sit, vel exercitationem aut?"),
            ]
        ),

        new Cv("5","2",
            [
                new Msg("5", 1605878054980, "Hi!"),
                new Msg("2", 1605878061513, "How are you?")
            ]
        ),
    ]
};

/*
//Conversation constructor
*/
function Cv(id1, id2, msgs)
{
    this.id1= id1;
    this.id2= id2;
    this.msgs= msgs;
}

/*
//Message constructor
*/
function Msg(id, ts, txt)
{
    this.id= id;
    this.timestamp= ts;
    this.text= txt;
}


// objeto do banco de dados
var db_userreg = {};//Banco de dados do usuário
var db_psyreg= {};//Banco de dados do psicólogo
var db_chatmsg= {};//Banco de dados das mensagens
var current_user;//usuário logado
var chating_user;//dados do usuário do chat
var drop_reference1= [];//referencia das ids no dropdown
var drop_reference2= [];//referencia das ids no dropdown
var cv;

/*
// Se não houver nenhum usuário logado carrega os dados dos db iniciais
// e inicia o usuário corrente, senão, carrega os dados do armazenamento
// do browser.
*/
function initLoginApp() 
{
    /*localStorage.clear(); //test*/
    //let timestamp= Date.now();//test
    //console.log(timestamp);//test

    if(!(sessionStorage.getItem('current_user') && localStorage.getItem('db_userreg')))
    {
        /*console.log("Lendo dados!"); //test*/

        
        db_userreg = db_usuarios_inicial;
        db_psyreg= db_psicologos_inicial;
        db_chatmsg= db_chatmsg_inicial;

        current_user= db_userreg.reg[0];
        chating_user= db_psyreg.reg[0];

        //console.log(current_user);
        //console.log(chating_user);

        localStorage.setItem('db_userreg', JSON.stringify(db_userreg));
        localStorage.setItem('db_psyreg', JSON.stringify(db_psyreg));
        localStorage.setItem('db_chatmsg', JSON.stringify(db_chatmsg));

        sessionStorage.setItem('current_user', JSON.stringify(current_user));
    }
    else
    {        
        db_userreg= JSON.parse(localStorage.getItem('db_userreg'));
        db_psyreg= JSON.parse(localStorage.getItem('db_psyreg'));
        db_chatmsg= JSON.parse(localStorage.getItem('db_chatmsg'));

        current_user = JSON.parse(sessionStorage.getItem('current_user'));
        chating_user = db_psyreg.reg[0];
    }
};


/*
//  Constroi a interface dos dropdown menus com o nome dos usuários
*/
function setDropdownUsers()
{
    document.getElementById('users_dropdown-menu1').innerHTML = '';
    document.getElementById('users_dropdown-menu2').innerHTML = '';

    let aux = 0;//auxiliar para continuar a contagem nos vetores das ids

    for(let i=0; i< db_userreg.reg.length; i++, aux++)
    {
        document.getElementById('users_dropdown-menu1').innerHTML += 
        '<a id="user_'+db_userreg.reg[i].id+'" class="dropdown-item" href="#">'+db_userreg.reg[i].nome+'</a>';

        drop_reference1[i]= db_userreg.reg[i].id;// salva as referencias das ids no vetor1
    }

    for(let i=0; i< db_psyreg.reg.length; i++)
    {
        document.getElementById('users_dropdown-menu1').innerHTML +=
        '<a id="user_'+db_psyreg.reg[i].id+'" class="dropdown-item" href="#">'+db_psyreg.reg[i].nome+'</a>';

        drop_reference1[i+aux]= db_psyreg.reg[i].id;// salva as referencias das ids no vetor1
    }

    aux= 0;

    for(let i=0; i< db_userreg.reg.length; i++, aux++)
    {
        document.getElementById('users_dropdown-menu2').innerHTML += 
        '<a id="user_'+db_userreg.reg[i].id+'" class="dropdown-item" href="#">'+db_userreg.reg[i].nome+'</a>';

        drop_reference2[i]= db_userreg.reg[i].id;// salva as referencias das ids no vetor2
    }

    for(let i=0; i< db_psyreg.reg.length; i++)
    {
        document.getElementById('users_dropdown-menu2').innerHTML +=
        '<a id="user_'+db_psyreg.reg[i].id+'" class="dropdown-item" href="#">'+db_psyreg.reg[i].nome+'</a>';

        drop_reference2[i+aux]= db_psyreg.reg[i].id;// salva as referencias das ids no vetor2
    }
}

/*
// Metodo auxiliar que limpa o conteudo antigo existente na janela e
// em seguida constroi o conteúdo gráfico dos paineis de acordo com
// os dados salvos no banco de dados.
*/
function setChatWindow()
{
    clearMsgBox();

    if(current_user.id != chating_user.id)
    {
        setUserPanel();
        assignChatData();
    }
    else
    {
        setUserPanelError();
        setMsgBoxError(1);
    }
}

/*
//  Procura o usuário corrente ou o usuário do chat comparando o id da
//  referência com o id nos vetores-referência. Quando determinado o usuário
//  do chat, constroi o painel.
*/
function setDropsEvent()
{
    let p= document.querySelectorAll('#users_dropdown-menu1> a');
    p.forEach((item, index) =>//index do vetor1
    {
        item.onclick= ()=> 
        {
            current_user= getUser(index);            
            setChatWindow();
        }
    });

    let q= document.querySelectorAll('#users_dropdown-menu2> a');
    q.forEach((item, index) =>//index do vetor2
    {
        item.onclick= ()=> 
        {
            chating_user= getUser(index)
            setChatWindow();
        }
    });
}


/*
// Busca o usuário no db de acordo com o id armazenado em um index do 
// vetor-referência
*/
function getUser(index)
{
    let user= null;
    
    db_userreg.reg.forEach((item) =>
    {
        if(item.id == drop_reference1[index])
        user= item;    
    });

    db_psyreg.reg.forEach((item) =>
    {
        if(item.id == drop_reference2[index])
        user= item;    
    });

    return user;
}


function setUserPanel()
{
    document.getElementById('card-friendname').innerHTML= 
    `${chating_user.nome} ${chating_user.sobrenome}`;
    document.getElementById('card-photoframe').innerHTML= 
    `<img id="friend-photo" src="${chating_user.photo}" alt="Foto do amigo">`;
}


function assignChatData()
{
    getCv();

    if(cv!= null)
    setMsgBox(cv);
    else
    setMsgBoxError(1);
}

function getCv()
{
    let id1= current_user.id;
    let id2= chating_user.id;
    cv= null;

    if(id1 != id2)
    {
        db_chatmsg.conversations.forEach((item) =>
        {
            if((id1 == item.id1 || id1==item.id2) && (id2 == item.id2 || id2== item.id1))
            {
                cv= item;
            }
        });

        if(cv== null)//Cria uma nova conversa
        {
            db_chatmsg.conversations.push(new Cv(current_user.id, chating_user.id,[]));
            cv= db_chatmsg.conversations[db_chatmsg.conversations.length-1];
        }
    }
}

function clearMsgBox()
{
    document.getElementById('message-box').innerHTML= '';
    document.getElementById('message-box').style.backgroundColor=  "#EFEFEF";
}

function setMsgBox()
{
    let id1= current_user.id;
    let id2= chating_user.id;

    clearMsgBox();

    cv.msgs.forEach((item) =>
    {
        if(item.id == id1)
        {
            document.getElementById('message-box').innerHTML+= 
            ` <div class="usrmsg-wrapper"><p class= "usrmsg">${item.text}</p><p class= time>${setDate(item.timestamp)}</p></div>`
        }
        else if(item.id == id2)
        {
           
            document.getElementById('message-box').innerHTML+= 
            ` <div class="frndmsg-wrapper"><p class= "frndmsg">${item.text}</p><p class= time>${setDate(item.timestamp)}</p></div>`
        }
        else
        {
            setMsgBoxError(2);
        }
    });
}

function setDate(timestamp)
{
    let hour= '';
    let minute= '';

    let date= new Date(timestamp);
    
    if(date.getHours()< 10)
    {
        hour= '0';
    }
    
    hour= hour + date.getHours();


    if(date.getMinutes()< 10)
    {
        minute= '0';
    }
    
    minute= minute+ date.getMinutes();
    

    return `${hour}:${minute}`
}

function setInputEvent()
{
    let txt= '';

    document.getElementById('btn-sendmsg').onclick= () =>
    {
        txt= writingbox.value;
        
        if(cv!= null)
        {
            /* console.log(cv); */
            cv.msgs.push(new Msg(current_user.id, Date.now(), txt));
            localStorage.setItem('db_chatmsg', JSON.stringify(db_chatmsg));
        }

        writingbox.value= '';

        setMsgBox();
    }
}

function setUserPanelError()
{
    document.getElementById('card-photoframe').innerHTML= '<i id="cardicon-photoframe" class="fas fa-heart-broken fa-3x"></i>';
    document.getElementById('card-friendname').innerHTML= 'Erro!';
}

function setMsgBoxError(i)
{
    document.getElementById('message-box').style.backgroundColor= "#FFBEBE";
    document.getElementById('message-box').innerHTML= '';

    if(i == 1)
    {
        let str1= `O usuário não pode ser o mesmo!`;
        document.getElementById('message-box').innerHTML+= str1;
        //throw new Error(str1);
    }
    else if(i == 2)
    {
        let str2= `Arquivo de conversas mal-formatado ou corrompido!`;
        document.getElementById('message-box').innerHTML+= str1;
        //throw new Error(str2);
    }
    else
    {
        let str3= `Erro desconhecido!`;
        document.getElementById('message-box').innerHTML+= str1;
        //throw new Error(str3);
    }
    
}

//Chat main
onload= () =>
{
    setDropdownUsers();
    setDropsEvent();
    setInputEvent();
}


initLoginApp();