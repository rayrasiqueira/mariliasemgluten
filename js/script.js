

function enviar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");

    var dados = JSON.parse(localStorage.getItem("dadosUsuario"));

    if (dados == null) {
        localStorage.setItem("dadosUsuario", "[]");
        dados = [];
    }

    if (validateEmail(document.getElementById("email").value)) {

        var auxRegistro = {
            nome: nome.value,
            email: email.value
        } 

        dados.push(auxRegistro);

        localStorage.setItem("dadosUsuario", JSON.stringify(dados));

    } else {
        console.log('teste')
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}