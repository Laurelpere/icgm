'use strict';
let svg = document.querySelectorAll('svg');
let sub = document.querySelectorAll('.nav-list .sub');
const ipeg = document.querySelector('.ipeg');
const jot = document.querySelector('.jot');
const carousel = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

const openNav = function(){
  for(let i = 0; i < sub.length; i++){
   sub = document.querySelectorAll('.nav-list .sub'); 
   sub[i].style.visibility = 'visible';
  }
  for(let i = 0; i < svg.length; i++){
   svg = document.querySelectorAll('svg');
   if(i === 0) {
    svg[i].style.visibility = 'visible';
    svg[i].style.backgroundColor = 'white';

   }
   
  }

  for(let i = 0; i < svg.length; i++){
   svg = document.querySelectorAll('svg');
   if(i === 1) {
    svg[i].style.visibility = 'hidden';

   }
   
  }
}


const closeNav = function(){
  for(let i = 0; i < sub.length; i++){
   sub = document.querySelectorAll('.nav-list .sub'); 
   sub[i].style.visibility = 'hidden';
  }
  for(let i = 0; i < svg.length; i++){
   svg = document.querySelectorAll('svg');
   if(i === 0) {
    svg[i].style.visibility = 'hidden';
    svg[i].style.backgroundColor = 'white';

   }
   
  }

  for(let i = 0; i < svg.length; i++){
   svg = document.querySelectorAll('svg');
   if(i === 1) {
    svg[i].style.visibility = 'visible';

   }
   
  }
}


jot.addEventListener('click', openNav);
ipeg.addEventListener('click', closeNav);
//overlay.addEventListener('click', closeNav);

document.addEventListener('keydown', function(event) {
	if(event.key === 'Escape'){
		closeNav()
	}
})


let currentIndex = 0;
const totalSlides = slides.length;

// Function to go to the next slide
function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Loop back to the first slide
    }
    updateCarousel();
}

// Function to go to the previous slide
function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Loop back to the last slide
    }
    updateCarousel();
}

// Function to update carousel position
function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}
