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
      window.open("https://drive.google.com/file/d/1_6Ev2WzMjCg4F4IzJOKYbvAEvuorq8nK/view?usp=sharing", "_blank");
    }
    );
  }
});

//Caroselli - Funzione generica parametrizzata
function initCarousel(slidesClass, dotsClass) {
  let slideIndex = 1;
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(slidesClass);
    let dots = document.getElementsByClassName(dotsClass);
    
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
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  showSlides(slideIndex);
  
  // Auto-transition ogni 4 secondi
  setInterval(function() {
    plusSlides(1);
  }, 4000);
  
  return { plusSlides, currentSlide };
}

// Inizializza i tre carousel
initCarousel("carousel-slide", "carousel-dot");
initCarousel("dashboard-slide", "dashboard-dot");
initCarousel("projects-slide", "projects-dot");

// Esporta funzioni per onclick inline nell'HTML (compatibilità)
window.plusSlides = function(n) {
  // Retrocompatibilità per eventuali usi precedenti
};
window.currentSlide = function(n) {
  // Retrocompatibilità per eventuali usi precedenti
};
window.dashboardCurrentSlide = function(n) {
  // Retrocompatibilità per eventuali usi precedenti
};
window.dashboardPlusSlides = function(n) {
  // Retrocompatibilità per eventuali usi precedenti
};
window.projectsCurrentSlide = function(n) {
  // Retrocompatibilità per eventuali usi precedenti
};
window.projectsPlusSlides = function(n) {
  // Retrocompatibilità per eventuali usi precedenti
};