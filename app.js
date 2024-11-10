const navbarCallBtn = document.querySelector('.navbarCallBtn');
const navbarHelpBox = document.querySelector('.navbarHelpBox');

const section8Slider = document.querySelector('.section8Container');
const section5ReviewsDiv = document.querySelector('.section5ReviewsDiv');
const section6Second1 = document.querySelector('.section6Second1');

const section12QuestionHeding = document.querySelectorAll('.section12QuestionHeding');
const section12QuestionAnswer = document.querySelectorAll('.section12QuestionAnswer');

const navbarHamberber = document.querySelector(".navbarHamberber");
const navbarListItemsForMobile = document.querySelector(".navbarListItemsForMobile");


navbarCallBtn.addEventListener('click', () => {
  navbarHelpBox.classList.toggle('navbarHelpBoxDisplay');
})


function scrollonMouseDrag(slider) {
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
    //   console.log(walk);
  });
}
scrollonMouseDrag(section8Slider)
scrollonMouseDrag(section5ReviewsDiv)
scrollonMouseDrag(section6Second1)




document.addEventListener("DOMContentLoaded", () => {
  section8Slider.scrollLeft = section8Slider.scrollWidth / 2 - section8Slider.clientWidth / 2;
});


for (let i = 0; i < section12QuestionHeding.length; i++) {
  section12QuestionHeding[i].addEventListener('click', () => {
    section12QuestionAnswer[i].classList.toggle('section12QuestionHedingVisible');
  })

}
//   console.log(section12QuestionHeding);


navbarHamberber.addEventListener('click', () => {
  navbarListItemsForMobile.classList.toggle("navbarListItemsForMobileActive")
})