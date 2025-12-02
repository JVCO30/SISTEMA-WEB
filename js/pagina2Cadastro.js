let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();
//Criar conta
document.getElementById("create-form").addEventListener("submit", function (e){
    e.preventDefault();
    const email = document.getElementById("email-cadastro").value;
    const password = document.getElementById("password-cadastro").value;
    const CPF = document.getElementById("CPF-cadastro").value;
    const telefone = document.getElementById("password-cadastro").value;
    const name = document.getElementById("password-cadastro").value;
    if(email.length < 5 ){
        alert("Email invalido");
        return;
    }
    if(password.length < 4){
        alert("Senha minimo 4 digitos");
        return;
    }
    saveAccount({
        name: name,
        login: email,
        password: password,
        telefone: telefone,
        CPF: CPF
        
    });

    alert("Conta Criada");
    window.location.href = "pagina3Inicial.html";
})

function saveAccount(data){
    localStorage.setItem(data.login, JSON.stringify(data) )
}

function saveSession(data, saveSession){
    if(saveSession){
        localStorage.setItem("session", data);
    }
    sessionStorage.setItem("logged", data);
}

function checkLogged(){
    if(session){
        sessionStorage.getItem("logged", session);
        logged = session;
    }
    if(logged){
        saveSession("logged", session);
        window.location.href = "pagina3Inicial.html";
    }
}