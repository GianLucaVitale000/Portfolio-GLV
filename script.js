/* ============================================
   FORMULAIRE DE CONTACT
   ============================================ */

/**
 * Active/Désactive le bouton d'envoi du formulaire
 * en fonction de l'état de la case à cocher de consentement.
 * Change également le texte et l'icône du bouton dynamiquement.
 */
function toggleSubmitButton() {
    const checkbox = document.getElementById("consentCheckbox");
    const button = document.getElementById("submitButton");
    const buttonText = document.getElementById("buttonText");
    const privacyPolicy = document.getElementById("privacyPolicy");
    const consentFieldWrapper = document.getElementById("consentFieldWrapper");
    const buttonIcon = button.querySelector("i");

  // Si la case est cochée: active le bouton et affiche les informations
  if (checkbox.checked) {
    button.disabled = false;
    button.classList.remove("w3-light-grey");
    button.classList.add("w3-green");
    buttonText.textContent = "C'est parti !";
    privacyPolicy.style.display = "block";
    consentFieldWrapper.style.display = "block";
    buttonIcon.className = "fa fa-paper-plane";
  } 
  // Sinon: désactive le bouton et cache les informations
  else {
    button.disabled = true;
    button.classList.remove("w3-green");
    button.classList.add("w3-light-grey");
    buttonText.textContent = "Cocher la case avant d'envoyer";
    privacyPolicy.style.display = "none";
    consentFieldWrapper.style.display ="none";
    buttonIcon.className = "fa fa-ban";
  }
}

/* ============================================
   TÉLÉCHARGEMENT DU CV
   ============================================ */

/**
 * Ouvre le CV en PDF depuis Google Drive dans un nouvel onglet
 * lorsque l'utilisateur clique sur le bouton de téléchargement.
 */
document.addEventListener("DOMContentLoaded", function() {
  var cvButton = document.getElementById("cvButton");
  if (cvButton) {
    cvButton.addEventListener("click", function() {
      window.open("https://drive.google.com/file/d/1_6Ev2WzMjCg4F4IzJOKYbvAEvuorq8nK/view?usp=sharing", "_blank");
    });
  }
});

/* ============================================
   CARROUSELS (Galeries d'images)
   ============================================ */

/**
 * Initialise un carrousel avec navigation automatique et manuelle.
 * @param {string} slidesClass - Classe CSS des images du carrousel
 * @param {string} dotsClass - Classe CSS des points de navigation
 * @returns {Object} Contient les méthodes plusSlides et currentSlide
 */
function initCarousel(slidesClass, dotsClass) {
  let slideIndex = 1;           // Index du slide actuel
  let autoPlayInterval;         // Identifiant de l'intervalle de lecture automatique
  
  /**
   * Affiche le slide à l'index n et met à jour les points de navigation.
   * Gère le bouclage circulaire (dernier -> premier et vice-versa).
   */
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName(slidesClass);
    let dots = document.getElementsByClassName(dotsClass);
    
    // Gestion du bouclage circulaire des slides
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    // Cache tous les slides
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Désactive tous les points de navigation
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Affiche le slide courant et active son point
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  /**
   * Réinitialise le timer de lecture automatique.
   * Utile pour relancer le timer après une action utilisateur.
   */
  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(function() {
      plusSlides(1);
    }, 4000);
  }
  
  /**
   * Passe au slide suivant (ou précédent si n est négatif).
   * Réinitialise le timer automatique après chaque navigation.
   */
  function plusSlides(n) {
    showSlides(slideIndex += n);
    resetAutoPlay();
  }
  
  /**
   * Sélectionne directement le slide à l'index n.
   * Utilisé par les points de navigation (onclick).
   * Réinitialise le timer automatique après chaque sélection.
   */
  function currentSlide(n) {
    showSlides(slideIndex = n);
    resetAutoPlay();
  }
  
  // Affiche le premier slide au chargement
  showSlides(slideIndex);
  
  // Démarre la lecture automatique: changement de slide toutes les 4 secondes
  autoPlayInterval = setInterval(function() {
    plusSlides(1);
  }, 4000);
  
  return { plusSlides, currentSlide };
}

// Initialisation des carrousels
const carousel1 = initCarousel("carousel-slide", "carousel-dot");
const dashboard = initCarousel("dashboard-slide", "dashboard-dot");
const projects = initCarousel("projects-slide", "projects-dot");
const sushizen = initCarousel("sushizen-slide", "sushizen-dot");

// Exposer les fonctions globalement pour les boutons de navigation
// Carrousel 1 (Login - Galeria di login/autenticazione)
window.plusSlides = carousel1.plusSlides;
window.currentSlide = carousel1.currentSlide;

// Carrousel 2 (Dashboard - Tableau de bord)
window.dashboardCurrentSlide = dashboard.currentSlide;
window.dashboardPlusSlides = dashboard.plusSlides;

// Carrousel 3 (Projets - Galerie de projets)
window.projectsCurrentSlide = projects.currentSlide;
window.projectsPlusSlides = projects.plusSlides;

// Carrousel 4 (SushiZen - Galerie SushiZen)
window.sushizenCurrentSlide = sushizen.currentSlide;
window.sushizenPlusSlides = sushizen.plusSlides;