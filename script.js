//Envoyer le formulaire
function toggleSubmitButton() {
    const checkbox = document.getElementById("consentCheckbox");
    const button = document.getElementById("submitButton");
    const buttonText = document.getElementById("buttonText");
    const privacyPolicy = document.getElementById("privacyPolicy");
    const consentFieldWrapper = document.getElementById("consentFieldWrapper");
    const buttonIcon = button.querySelector("i");

  if (checkbox.checked) {
    button.disabled = false;
    button.classList.remove("w3-light-grey");
    button.classList.add("w3-green");
    buttonText.textContent = "C'est parti !";
    privacyPolicy.style.display = "block";
    consentFieldWrapper.style.display = "block";
    buttonIcon.className = "fa fa-paper-plane";
  } else {
    button.disabled = true;
    button.classList.remove("w3-green");
    button.classList.add("w3-light-grey");
    buttonText.textContent = "Cocher la case avant d'envoyer";
    privacyPolicy.style.display = "none";
    consentFieldWrapper.style.display ="none";
    buttonIcon.className = "fa fa-ban";
  }
}

//Télécharger mon CV (Google Drive)
document.addEventListener("DOMContentLoaded", function() {
  var cvButton = document.getElementById("cvButton");
  if (cvButton) {
    cvButton.addEventListener("click", function() {
      window.open("https://drive.google.com/file/d/1XPy7xr_d98g9oZuhS7pRqGF5sgtEw2k_/view?usp=sharing", "_blank");
    }
    );
  }
});

//Carosello Portfolio
let slideIndex = 1;
showSlides(slideIndex);

//funzione per cambiare slide manualmente
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("carousel-dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// transizione automatica delle slide
setInterval(function() {
  plusSlides(1);
}, 4000); // Cambia slide ogni 4 secondi

// Carosello Dashboard
let dashboardSlideIndex = 1;
dashboardShowSlides(dashboardSlideIndex);

// Controllo diretto della slide corrente
function dashboardCurrentSlide(n) {
  dashboardShowSlides(dashboardSlideIndex = n);
}

// Cambio slide avanti/indietro
function dashboardPlusSlides(n) {
  dashboardShowSlides(dashboardSlideIndex += n);
}

// Mostra le slide
function dashboardShowSlides(n) {
  let i;
  let slides = document.getElementsByClassName("dashboard-slide");
  let dots = document.getElementsByClassName("dashboard-dot");
  
  if (n > slides.length) {dashboardSlideIndex = 1}
  if (n < 1) {dashboardSlideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[dashboardSlideIndex-1].style.display = "block";
  dots[dashboardSlideIndex-1].className += " active";
}

// Transizione automatica delle slide dashboard
setInterval(function() {
  dashboardPlusSlides(1);
}, 4000); // Cambia slide ogni 4 secondi, coerente con l'altro carosello