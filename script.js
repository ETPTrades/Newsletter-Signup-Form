content = document.querySelector(".newsletter-container");
form = document.getElementById("form");
emailInput = document.getElementById("email");
subscribeButton = document.getElementById("button");
errorMessage = document.querySelector(".newsletter__error-message");
success = document.querySelector(".success");
modal = document.getElementById("success__modal");
dismissButton = document.querySelector(".success__dismiss");



const handleFormSubmission = (e) => {
    e.preventDefault(e);
    const data = {};
    const field = document.querySelector("#email");
    data[field.name] = field.value;
    
    if (!emailInput.checkValidity()) {
        errorMessage.innerText = "Valid email required"; 
    } else {
     content.classList.add("hidden");
     success.classList.remove("hidden");
     modal.showModal();
    }
}
form.addEventListener("submit", handleFormSubmission);

const handleDismiss = (e) => {
    content.classList.remove("hidden");
    success.classList.add("hidden");
    modal.close();
    errorMessage.innerText = "";
}

dismissButton.addEventListener("click", handleDismiss);
