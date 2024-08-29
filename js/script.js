const form = document.querySelector("#form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelector = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();   // impede de você ser redirecionado

    // verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome");
        return;  // para retornar a função
    }

    // verifica se o email está preenchido e se é válido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preencha o seu email");
        return;
    }

    // verifica se a senha está preenchida
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos.");
        return;
    }

    // verifica se a situação foi selecionada
    if (jobSelector.value === "") {
        alert("Por favor, selecione a sua situação.");
        return;
    }

    // verifica se a mensagem foi preenchida
    if (messageTextarea.value === "") {
        alert("Por favor, envie uma mensagem.");
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit(); 
})

// Função que valida email
function isEmailValid(email) {
    // cria um regex para validar email
    const emailRegex = RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    }
    
    return false;
}

// Função que valida a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // senha válida
        return true;
    }

    // senha inválida
    return false;
}