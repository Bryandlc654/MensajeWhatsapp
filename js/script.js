function sendWhatsAppMessage(phoneNumber, message) {
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
