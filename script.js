document.addEventListener("DOMContentLoaded", function () {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".carousel img");
    const totalImages = images.length;

    document.getElementById("next").addEventListener("click", function () {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add("active");
    });

    document.getElementById("prev").addEventListener("click", function () {
        images[currentImageIndex].classList.remove("active");
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        images[currentImageIndex].classList.add("active");
    });

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Mensaje enviado con éxito");
        this.reset();
    });
});
