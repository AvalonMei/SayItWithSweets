// Get the modal and trigger button elements
var modal = document.getElementById("mailingListModal");
var btn = document.getElementById("mailingListBtn");
var closeBtn = document.getElementsByClassName("close")[0];

// Open the modal when the button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get all the category cards
var productCards = document.querySelectorAll('.product-card');

// Get all the category cards
var categoryCards = document.querySelectorAll('.category-card');

// Get all the modals
var modals = document.querySelectorAll('.modal');

// Add click event listener to each category card
categoryCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Add click event listener to each product card
productCards.forEach(card => {
  card.addEventListener('click', () => {
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

// Add click event listener to each close button
modals.forEach(modal => {
  const closeBtn = modal.querySelector('.close');
  const modalContent = modal.querySelector('.modal-content');

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Open the modal when "View Details" is clicked
var viewDetailsLinks = document.querySelectorAll('.view-details');
viewDetailsLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const modalId = link.dataset.modal;
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
  });
});

function activeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


var slides = $('.slide');
var currentSlide = 0;

slides.eq(currentSlide).addClass('active');

function nextSlide() {
  slides.eq(currentSlide).removeClass('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides.eq(currentSlide).addClass('active');
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Initialize and add the map only if on the correct page
if (window.location.href.includes('contact.html')) {
  let map;

  async function initMap() {
      const position = { lat: 40.50593948364258, lng: -78.3869400024414 };
      // Request needed libraries.
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      map = new Map(document.getElementById("map"), {
          zoom: 12,
          center: position,
          mapId: "Say it With Sweets",
      });

      const marker = new AdvancedMarkerElement({
          map: map,
          position: position,
          title: "Say it With Sweets",
      });
  }

  initMap();
}