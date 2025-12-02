
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    agendamentos: []
};
let usuarios = {
    agendamentos: []
};

usuarios = JSON.parse(localStorage.getItem("usuarios")) || [] ;
    console.log(usuarios);
document.getElementById("button-logout").addEventListener("click", logout);

checkLogged();
console.log(JSON.parse(localStorage.getItem("usuarios")));
document.getElementById("modal-agendamento").addEventListener("submit", function (e) {
    e.preventDefault;
    const hora = document.getElementById("hora-modal").value;
    const laboratorio = document.getElementById("laboratorio-modal").value;
    const date = document.getElementById("data-modal").value;
    const aula = document.getElementById("aula-modal").value;
    
    data.agendamentos.unshift({
        hora: hora , laboratorio: laboratorio, aula: aula, date: date
    });
    console.log(data);
    saveData(data);
    e.target.reset();
    myModal.hide();
    getMeuAgendamento();
    getTodoAgendamento();
    alert("Agendamento Adicionado");

});

function saveData(data){
    localStorage.setItem(data.login , JSON.stringify(data));
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    usuarios.push(data);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function getMeuAgendamento(){
    const agendamento = data.agendamentos;
    let agendamentoHTML = ``;

    if(agendamento.length){
        agendamento.forEach((item) =>{
            agendamentoHTML += `
            <tr>
                <td>${item.date}</td>
                <td>${item.hora}</td>
                <td>${item.laboratorio}</td>
                <td>${item.aula}</td>
            </tr>
            `;
        })
    }
    document.getElementById("my-table").innerHTML = agendamentoHTML;

}

function getTodoAgendamento(){
    const user = usuarios;
    let agendamentoHTML = ``;
    console.log("usuarios", user);
        Object.values(user).forEach((users) =>{
            console.log("pao",users.agendamento);
            users.agendamentos.forEach((item) =>{
                
                agendamentoHTML += `
                <tr>
                    <td>${item.date}</td>
                    <td>${item.hora}</td>
                    <td>${item.laboratorio}</td>
                    <td>${item.aula}</td>
                </tr>
                `;
            })
        })
            
                

    document.getElementById("total-table").innerHTML = agendamentoHTML;
    console.log("final")
}

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
    getMeuAgendamento();
    getTodoAgendamento();
}
function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "pagina1Login.html";
}


