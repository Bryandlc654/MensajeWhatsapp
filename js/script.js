function sendWhatsAppMessage(phoneNumber, message) {
  window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`);
}