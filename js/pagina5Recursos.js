let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");


document.getElementById("button-logout").addEventListener("click", logout);
checkLogged();

function checkLogged(){
    if(session){
        sessionStorage.getItem("logged", session);
        logged = session;
        
    }
    if(!logged){
        window.location.href = "pagina1Login.html";
        return;
    }
    
    const dataUser = localStorage.getItem(logged);
    if(dataUser){
        data = JSON.parse(dataUser);
    }

}
function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "pagina1Login.html";
}

