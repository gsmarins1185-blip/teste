/// SCRIPT PAG LOGIN////

document.addEventListener('DOMContentLoaded', function () {

    IMask(document.getElementById('cpf'), {
        mask: '000.000.000-00'
    });

});

document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("telefone"), {
        mask: '(00) 00000-0000'
    });
});
document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("cep"), {
        mask: '00000-000'
    });
});
document.addEventListener('DOMContentLoaded', function () {
    IMask(document.getElementById("cnpj"), {
        mask: '00.000.000/0000-00'
    });
});



let valorMask = IMask(document.getElementById('valor'), {
    mask: Number,
    scale: 2,              // casas decimais
    signed: false,         // sem negativo
    thousandsSeparator: '.',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ',',            // separador decimal
});


function logar() {

    let usuario = document.getElementById('user').value;
    let senha = document.getElementById('senha').value;

    if (usuario === "" && senha === "") {
        alert("Digite Usuário e Senha")
    } else if
        ((usuario === "admin") && (senha === "empresa@2026")) {
        alert("Bem vindo à nossa página!");
        window.location.href = "HomePD.html";
    } else if
        ((usuario === "operacional") && (senha = "opec2026")) {
        alert("Bem vindo à nossa página!");
        window.location.href = "HomeOpec.html";
    }
    else {
        alert("Usuário ou Senha Inválida");
        window.location.href =""
    }
}
/// HTML DO PROJETO ////

function cadastrar() {
    
    alert("Cadastrado com sucesso!");
    window.location.reload()
}

function confirmar() {
    let cliente = document.getElementById('cliente').value;
    let profissional = document.getElementById('profissional').value;
    let data = document.getElementById('data-visita').value;
    let hora = document.getElementById("hora-visita").value;


    if
        ((cliente === "") || (profissional === "") || (data ==="") || (hora === "") ) {
        alert('Preencha as informações do formulário')
    } else {
        alert("Agendamento Confirmado");
    }
    window.location.href = ""
}



    function salvar() {
        alert("Produto salvo! ")
    }
    function fornecedor() {
        alert("Fornecedor registrado! ")
    }


/// HTML DO USUÁRIO ////
