content = document.querySelector(".newsletter-container");
form = document.getElementById("form");
emailInput = document.getElementById("email");
userEmail = document.querySelector(".success__user-email");
errorMessage = document.querySelector(".newsletter__error-message");
success = document.querySelector(".success");
modal = document.getElementById("success__modal");
dismissButton = document.querySelector(".success__dismiss");




const handleFormSubmission = (e) => {
    e.preventDefault();
    const data = {};
    data[emailInput.name] = emailInput.value;
    
    if (!emailInput.checkValidity()) {
        emailInput.setAttribute("aria-invalid", "true");
        errorMessage.innerText = "Valid email required";
    } else {
     emailInput.removeAttribute("aria-invalid");
     errorMessage.innerText = "";
     content.classList.add("hidden");
     success.classList.remove("hidden");
     userEmail.innerText = `${data.email}`;
     modal.showModal();
    }
}
form.addEventListener("submit", handleFormSubmission);

const handleDismiss = () => {
    content.classList.remove("hidden");
    success.classList.add("hidden");
    modal.close();
    emailInput.value = "";
}

dismissButton.addEventListener("click", handleDismiss);
