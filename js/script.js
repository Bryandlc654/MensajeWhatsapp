const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

function process(event) {
 event.preventDefault();

 const phoneNumber = phoneInput.getNumber();
 const message = document.getElementById('message').value;
 window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`);
}


let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que el formulario sea enviado

  let texto = document.querySelector("#message").value;
  let expresionRegular = /^[a-zA-Z0-9\s.,:;!?"']+$/; // expresión regular que permite solo letras y números

  if (expresionRegular.test(texto)) {
    console.log("El texto cumple con las condiciones");
  } else {
    console.log("El texto no cumple con las condiciones");
  }
});
