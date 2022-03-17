
// Declare and assign the variables
const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.show-more');


/* 
Web application waiting for an trigger, specifically a 'click, to run the code'
When the specified Button in the web app is clicked, the class selector of 'Text' toggles
between 'text' and 'text show-more'. This enables the previously hidden text to appear.
*/
readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('hidden');
})



/*
Again, waiting for a 'click' to to run the code
When the specified Button in the web app is clicked, the page scrolls 
to the preassigned destination with the scroll option being smooth and not light-speed
*/
document.querySelector('.read-more-btn').addEventListener('click', function() {

  document.querySelector('#more-about').scrollIntoView({
    behavior: 'smooth'
  });

});


// Nav hamburgerburger selections

const mobileNav = document.querySelector("#moba-nav");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

mobileNav.addEventListener("click", () => {
  ul.classList.toggle("show");
});


// Removes nav links when one is selected

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);