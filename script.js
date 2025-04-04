document.addEventListener("DOMContentLoaded", function() {
    console.log("Web sitesi yüklendi!");
});
document.addEventListener("DOMContentLoaded", function() {
    // Butona tıklama olayını dinle
    const button = document.getElementById("showMessageBtn");
    const message = document.getElementById("message");

    button.addEventListener("click", function() {
        // Butona tıklayınca mesajı göster
        message.style.display = "block";
    });
});
