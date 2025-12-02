let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

//Logar no Sistema
document.getElementById("login-form").addEventListener("submit", function (e){
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;
    const account = getAccount(email);
    if(!account){
        alert("Ops verifique o Usuário ou a senha");
        return;
    }

    if(account){
        if(account.password != password){
            alert("Ops verifique o Usuário ou a senha");
            return;
        }
        saveSession(email, checkSession);
        console.log("Depois da função")
        window.location.href = "pagina3Inicial.html";
        
        
    }
    
})

function getAccount(key){
    const account = localStorage.getItem(key);
    if(account){
        return JSON.parse(account);

    }
    return "";
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