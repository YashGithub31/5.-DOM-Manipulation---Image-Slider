document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdbDY9OKNsMKYXtz301-2Lbz59oiMSlvSwg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-xkRtdlVPW568NVS1aRc7P28kmr_g39poww&s",
        "https://online.uottawa.ca/sites/default/files/styles/blogfeature_large/public/field/image/Shutterstock_1332814550.jpg?itok=jLioig_Z"
    ];
    
    let currentIndex = 0;
    const imgElement = document.getElementById("sliderImage");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    
    function updateImage() {
        imgElement.src = images[currentIndex];
    }
    
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });
    
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });
    
    updateImage();
});
