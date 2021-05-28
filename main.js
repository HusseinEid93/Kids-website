const cardBtns = document.querySelectorAll('.card-button');
const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');


cardBtns.forEach(cardBtn => {
   cardBtn.addEventListener('click', e => {
      const circle =
         e.target.closest('button').nextElementSibling;
      const circleContent = circle.firstElementChild;
      circle.classList.toggle('change');
      circleContent.classList.toggle('change');
   });
});


menu.addEventListener('click', () => {
   menu.classList.toggle('change');
   navbar.classList.toggle('change');
});