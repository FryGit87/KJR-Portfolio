const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
})


document.querySelector('.read-more-btn').addEventListener('click', function() {

  document.querySelector('#more-about').scrollIntoView({
    behavior: 'smooth'
  });

});


