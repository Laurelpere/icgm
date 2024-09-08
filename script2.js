'use strict';
let contene = document.querySelectorAll('article span');
//const listContent = document.querySelectorAll('.list-content');
let readMore = document.querySelectorAll('.read-more');
const readLess = document.querySelectorAll('.read-less');
let svg = document.querySelectorAll('svg');
let sub = document.querySelectorAll('.nav-list .sub');
const ipeg = document.querySelector('.ipeg');
const jot = document.querySelector('.jot');
const overlay = document.querySelector('#overlay');
const meddy = window.matchMedia("(max-width: 780px)");


/*if(!meddy.matches) {
  for(let i = 0; i < svg.length; i++){
   svg = document.querySelectorAll('svg');
    svg[i].style.visibility = 'hidden';
  
 }
}*/

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

for(let i = 0; i < contene.length; i++){
  contene = document.querySelectorAll('article span');
  readMore[i].addEventListener('click', () =>{
    contene[i].style.display = 'block';
    readMore[i].style.display = 'none';
    readLess[i].style.display = 'block';
  });

  readLess[i].addEventListener('click', () => {
    contene[i].style.display = 'none';
    readMore[i].style.display = 'block';
    readLess[i].style.display = 'none';
  });
};


document.addEventListener('keydown', function(event) {
  if(event.key === 'Escape'){
    closeNav()
  }
})
//console.log(document.querySelectorAll('article span'));
//console.log(contene);

console.log(sub);
console.log(openNav);