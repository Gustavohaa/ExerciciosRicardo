const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor, preencha seu nome");
        return;
    }

    if(emailInput.value === "" || !isEmailValid(emailInput.value) ){
        alert("Por favor, insira o seu e-mail");
        return;
    }

    //verifica se a senha está preenchida
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa no mínimo 8 digitos. ");
        return;
    }

    //verifica se a situação foi selecionada

    if(jobSelect.value === ""){
        alert("Por favor, selecione a sua situação");
        return;
    }

    //verifica se a mensagem está preenchida

    if(messageTextarea.value === ""){
        alert("Por favor, escreva uma mensagem para nós.");
        return;
    }



    //se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
});

    //funçao que valida email
    function isEmailValid(email){

    //criar uma regex para validar email
    const emailRegex = new RegExp(
        // usuario12@host.com.br
        /^[a-zA-Z-9._-]+@[a-zA-Z-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    }
        return false;
};

    //função que valida a senha
    function validatePassword(password, minDigits) {
        return password.length >= minDigits;
    }