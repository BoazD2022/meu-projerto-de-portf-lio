function clickedLink() {
  console.log("O link foi clicado");
}

//API do Github
var idGitHub = document.getElementById("submitBtn");
var nomeGitHub = document.getElementById("nomeGitHub");
var linkGitHub = document.getElementById("linkGitHub");

function github(e) {
fetch("https://api.github.com/users/BoazD2022/repos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((data) => {
      nomeGitHub.innerHTML += "<p/>" + data.name;
      linkGitHub.innerHTML += "<p/>" + data.html_url;
    });

    console.log(data);
  })
  .catch((e) => console.log("Erro:" + e));

  e.disabled = true;
  setTimeout(function(){
      toggleDisabled(e)
    },10000);

function toggleDisabled(elem){
  elem.disabled = !elem.disabled;
}
}

//Validando o meu formulário
const nameInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const assuntoInput = document.querySelector('#assunto');
const mensagemTextarea = document.querySelector('#mensagem');
const submitButton = document.querySelector('#submitbutton');

const errorMessage = document.querySelector('.alert');

submitButton.addEventListener('click', (e) =>{
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const assuntoValue = assuntoInput.value;
    const mensagemValue = mensagemTextarea.value;

    if (nameValue === '' || emailValue === '' || assuntoValue === '' || mensagemValue === '') {
        errorMessage.textContent = ("Favor preencher todos os campos!");
        
        setTimeout(() => {
            errorMessage.textContent = ("");
        }, 3000);
        return;
    }

    if (emailValue.search("@") == -1) {
        errorMessage.textContent = ("E-mail incorreto! Caractere @  ausente no campo.");
        
        setTimeout(() => {
            errorMessage.textContent = ("");
        }, 4000);
        return;
    }

    nameInput.value = '';
    emailInput.value = '';
    assuntoInput.value = '';
    mensagemTextarea.value = '';
});