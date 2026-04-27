/// SCRIPT PAG LOGIN////
 function logar() {

            let usuario = document.getElementById('user').value;
            let senha = document.getElementById('senha').value;


            if (usuario === "" && senha === "") {
                alert("Digite Usuário e Senha")
            } else if
                ((usuario === "admin") && (senha === "empresa@2026")) {
                alert("Bem vindo à Nossa Página")
                window.location.href = "Home.html"

            } else {
                alert("Usuário ou Senha Inválida")
            }
        }
/// HTML DO PROJETO ////

function voltar() {
    alert('Funcionário cadastrado com Sucesso')
    window.location.href = '';
}

function CadastrarFun() {
    alert('Funcionário cadastrado com Sucesso')
}















