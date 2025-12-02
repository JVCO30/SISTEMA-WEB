
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    agendamentos: []
};
let agendados ={
    todosagendamentos: []
}

document.getElementById("button-logout").addEventListener("click", logout);
checkLogged();

document.getElementById("modal-agendamento").addEventListener("submit", function (e) {
    e.preventDefault;
    const hora = document.getElementById("hora-modal").value;
    const laboratorio = document.getElementById("laboratorio-modal").value;
    const date = document.getElementById("data-modal").value;
    const aula = document.getElementById("aula-modal").value;
    
    data.agendamentos.unshift({
        hora: hora , laboratorio: laboratorio, aula: aula, date: date
    });
    agendados.todosagendamentos.unshift({
        hora: hora , laboratorio: laboratorio, aula: aula, date: date
    });
    saveData(data);
    
    e.target.reset();
    myModal.hide();
    getMeuAgendamento();
    saveAgendamentos(agendados);
    getTodoAgendamento();
    alert("Agendamento Adicionado");

});

function saveData(data){
    localStorage.setItem(data.login , JSON.stringify(data));
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

function saveAgendamentos(agendados){
    localStorage.setItem(agendados.todosAgendamentos , JSON.stringify(agendados) );
}

function getTodoAgendamento(){
    const agendamento = agendados.todosagendamentos;
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
    document.getElementById("total-table").innerHTML = agendamentoHTML;

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
    const dataTodos = localStorage.getItem(agendados);
    agendados = JSON.parse(dataTodos);
    getMeuAgendamento();
    getTodoAgendamento();
}
function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "pagina1Login.html";
}


