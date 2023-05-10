/*tipos de variaveis
var let const
let x = "Meu nome é x";
let numero = 2;
const imposto = 10;

numero= 20 + 10;
alert(numero);

Date();
console.log(Date())*/

const nome = document.getElementById("nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto"); /*mais utilizado*/
let nomeOk = false
let emailOk = false
let assuntoOk = false

let txtNome = document.querySelector("#txtNome");
function validaNome(){
    if(nome.value.length <3){
        /*txtNome.innerHTML = "O nome deve ter mais de 3 caracteres" 
        txtNome.style.color = "red"*/
        nome.style.border='3px solid red'
    }else{
        /*txtNome.innerHTML = "Campo preenchido corretamente" 
        txtNome.style.color = "green"*/
        nome.style.border='3px solid green'
        nomeOk = true 
    }
    console.log(nome.value)  
} 

function validaEmail(){

    let txtEmail = document.querySelector("txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        email.style.border= "3px solid red"
    }else{
        email.style.border= "3px solid green"
        emailOk = true
    }
    console.log(email.value)
}

function validaAssunto(){

    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >=100){
        txtAssunto.innerHTML = "A mensagem deve ter no máximo 100 caracteres"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    } else {
        alert("Preencha o formulário corretamente!")
    }
}

/*function mapazoom() {
    mapa.style.widht = "800px"
    mapa.style.height = "600px"
}

function mapanormal() {
    mapa.style.widht = "400px"
    mapa.style.height = "250px"
}*/




