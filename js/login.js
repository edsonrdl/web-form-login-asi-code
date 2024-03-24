
const form = document.querySelector('.form');
const containerMessageText= document.querySelector('.container-cat-asi-code-message');

if(form.event=="submit"){

}
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const valueInputName = document.getElementById('input-name').value;
    const valueInputSobrenome = document.getElementById('input-sobrenome').value;
    const valueInputEMail = document.getElementById('input-e-mail').value;
  
    if (valueInputName.trim() !== '' && valueInputSobrenome.trim() !== '' && valueInputEMail.trim() !== '') {
      messageSuccess();
    } else {
        messageError();
    }
});

function messageSuccess() {
    let textSuccess = "Registro feito com sucesso na ASI CODE";
    displayMessage(textSuccess, 'success');
}
  
function messageError() {
    let textError = "Erro ao fazer o registro.";
    displayMessage(textError, 'error');
}

function displayMessage(message, messageType) {
    const div = document.createElement('div');
    div.classList.add("content-text-message");

    const p = document.createElement('p');
    p.textContent = message;
    p.classList.add("message-text");

    div.appendChild(p);
    setTimeout(() => {
        div.classList.add('content-text-message-show-add'); 
    }, 100); 
    containerMessageText.appendChild(div);

    if (messageType === 'success') {
        containerMessageText.classList.add("success-message");

        setTimeout(() => {
            removeMessageSuccesfully();
        }, 5000);
    } else if (messageType === 'error') {
        containerMessageText.classList.add("error-message");
        setTimeout(() => {
            removeMessageSuccesfully();
        }, 5000);
    }
    function removeMessageSuccesfully(){
        const containerDivText=document.querySelector(".content-text-message");
        const showMessage=document.querySelector(".content-text-message-show-add");
        showMessage.classList.remove('content-text-message-show-add'); 
        showMessage.classList.add('content-text-message-show-remove'); 
        setTimeout(() => {
            containerDivText.remove();
        }, 100); 


       

    }
}


