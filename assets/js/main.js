const showMenu = (toggleId,navId) =>{

  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if(toggle && nav){
      toggle.addEventListener('click', () =>{
          nav.classList.toggle('show-menu');
      })
  }
}
showMenu('nav_toggle','nav-menu');
// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// Scroll section active link

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrollY = window.pageYOffset;

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
      }else{
          document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  })
}
window.addEventListener('scroll',scrollActive);

// Change Background Header

function scrollHeader(){
  const header =  document.getElementById('header');
  if(this.scrollY >= 200) header.classList.add('scroll-header');
      else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  if(this.scrollY >= 500) scrollTop.classList.add('show-scroll');
      else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollTop);

// MIXITUP Filter
const mixer = mixitup('.portfolio_container', {
  selectors: {
      target: '.portfolio_content'
  },
  animation: {
      duration: 400
  }
});

// Link active portfolio

const linkPortfolio = document.querySelectorAll('.portfolio_item');

function activePortfolio(){
  if(linkPortfolio){
      linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
      this.classList.add('active-portfolio');
  }
}

linkPortfolio.forEach(l => l.addEventListener('click',activePortfolio));

// SWIPER

const swiper = new Swiper('.testimonial_container', {
  // Optional parameters
  spaceBetween:16,
  loop: true,
  grabCursor: true,
  // If we need pagination
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  breakpoints:{
      640:{
          slidesPerView: 2,
      },
      1024:{
          slidesPerView: 3,
      },
  }
});  

// GSAP
// gsap.form(".home_img",{opacity: 0, duration: 2, delay: .5, x: 60});
// gsap.from(".home_img", {duration: 3, x: 300, opacity: 0, scale: 0.5});
gsap.from(".home_img", {duration: 2, x: 60, opacity: 0, delay: .5});
gsap.from(".home_data", {duration: 2, y: 25, opacity: 0, delay: .8});
gsap.from(".home_greeting, .home_name, .home_profession,.home_button", {duration: 2, y: 25, opacity: 0, delay: 1, ease:'expo.out', stagger:.2});
gsap.from(".nav_logo, .nav_toggle",{duration: 2, y: 25, opacity: 0, delay: 1.5, ease:'expo.out', stagger:.2});
gsap.from(".nav_item",{duration: 2, y: 25, opacity: 0, delay: 1.8, ease:'expo.out', stagger:.2});
gsap.from(".home_social-icon",{duration: 2, y: 25, opacity: 0, delay: 2.3, ease:'expo.out', stagger:.2});