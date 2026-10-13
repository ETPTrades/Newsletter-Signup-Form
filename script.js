content = document.querySelector(".wrapper");
form = document.getElementById("form");
emailInput = document.getElementById("email");
subscribeButton = document.getElementById("button");
errorMessage = document.querySelector(".newsletter__error-message");
success = document.querySelector(".success");
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
    }
}
form.addEventListener("submit", handleFormSubmission);

const handleDismiss = (e) => {
    success.classList.add("hidden");
    content.classList.remove("hidden");
}

dismissButton.addEventListener("click", handleDismiss);
