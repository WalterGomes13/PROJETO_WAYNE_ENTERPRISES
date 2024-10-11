window.onload = function () {
    const logo = document.getElementById('imagem');
    const form = document.getElementById('form');

    logo.style.opacity = '1';

    setTimeout(function () {
        logo.style.transform = 'translate(-50%, -200%)'; 
        setTimeout(function () {
            form.style.opacity = '1'; 
        }, 1000);
    }, 1000);
};

const email = document.getElementById('user');
const senha = document.getElementById('senha');
const entrar = document.getElementById('botao');

function entrarWayne(){
    if(email.value =="" || senha.value==""){
        alert("Os campos devem ser preenchidos!");
    } else {
        fetch('usuarios.json')
            .then(response =>{
                if(!response.ok){
                    throw new Error("A solicitação não foi bem sucedida.")
                }
                return response.json();
            })
            .then(data =>{
                const usuarios = data.usuarios;
                let cont = 0;
                for(usuario of usuarios){
                    if(email.value == usuario.email && usuario.email == 'adm@gmail.com'){
                        if(senha.value == usuario.senha){
                            alert("Bem-vindo!");
                            cont =0;
                            window.location.href = 'dashboardAdm.html';
                            break;
                        } else {
                            cont +=1;
                        }
                    } else if(email.value == usuario.email && usuario.email == 'funcionario@gmail.com'){
                        if(senha.value == usuario.senha){
                            alert("Bem-vindo!");
                            cont =0;
                            window.location.href = 'dashboardFunc.html';
                            break;
                        } else {
                            cont +=1;
                        }
                    }
                    else {
                        cont +=1;
                    }
                }

                if(cont != 0){
                    alert("Email ou senha inválidos!");
                }
            })
            .catch(erro =>{
                console.error("Erro: "+ erro.message);
            })
        }  
}

entrar.addEventListener('click',(e)=>{
    e.preventDefault();
    try{
        entrarWayne();
    } catch(erro){
        console.error("Ocorreu um erro: ", erro);
    }
})