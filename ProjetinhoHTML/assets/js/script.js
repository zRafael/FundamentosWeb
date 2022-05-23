var nome = window.document.querySelector("#nome")
var email = window.document.querySelector("#email")
var assunto = window.document.querySelector("#assunto")
var nomeOk = false
var emailOk = false
var assuntoOk = false
var mapa = window.document.querySelector('#mapa')

function validarNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 2) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = 'Red'
    }
    else {
        txtNome.innerHTML = ''
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }
    else {
        txtEmail.innerHTML = ''
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres!'
        txtAssunto.style.color = 'red'
    }
    else {
        txtAssunto.innerHTML = ''
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Mensagem enviada com sucesso!')
    }
    else {
        alert('Mensagem não enviada, Valide os campos')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
