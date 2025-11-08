$(document).ready(function(){ 
	// Banner Carousel
	$('.slider-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		margin:20,
	}); 

});

document.addEventListener("DOMContentLoaded", function() {
  const parent = document.querySelector(".header-button-ul");
  const buttons = parent.querySelectorAll(".btn-2");

  buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();

      // Remove active from all buttons
      buttons.forEach(b => b.classList.remove("active"));

      // Add active to clicked button
      this.classList.add("active");
    });
  });
});