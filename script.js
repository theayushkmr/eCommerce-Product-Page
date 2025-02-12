document.addEventListener("DOMContentLoaded", function () {

    const mainImage = document.getElementById("currentImage");
    const thumbnails = document.querySelectorAll(".thumb");

    thumbnails.forEach((thumb) => {
        thumb.addEventListener("click", function () {
            mainImage.src = this.src;
        });
    });

    const popup = document.getElementById("popup");
    const quickViewBtn = document.querySelector(".quick-view");
    const closePopup = document.querySelector(".close");

    quickViewBtn.addEventListener("click", function () {
        popup.style.display = "block";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target == popup) {
            popup.style.display = "none";
        }
    });
});