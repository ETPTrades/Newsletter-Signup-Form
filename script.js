form = document.getElementById("form");
emailInput = document.getElementById("email");
subscribeButton = document.getElementById("button");
errorMessage = document.querySelector(".newsletter__error-message");



const handleFormSubmission = (e) => {
    e.preventDefault(e);
    const data = {};
    const field = document.querySelector("#email");
    data[field.name] = field.value;
    
    if (!emailInput.checkValidity()) {
        errorMessage.innerText = "Valid email required"; 
    } else {
     
    }
}
form.addEventListener("submit", handleFormSubmission);
