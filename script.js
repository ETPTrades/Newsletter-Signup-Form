form = document.getElementById("form");
emailInput = document.getElementById("email");
subscribeButton = document.getElementById("button");

const submitForm = (e) => {
    e.preventDefault();
}


form.addEventListener("submit", submitForm);