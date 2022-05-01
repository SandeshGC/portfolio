    let submitBtn = document.querySelector("#submit-contact-form");
    submitBtn.addEventListener('click', function (event){
        console.log(event.cancelable);
        event.preventDefault();
    })