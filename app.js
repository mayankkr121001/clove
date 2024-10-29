const navbarCallBtn = document.querySelector('.navbarCallBtn');
const navbarHelpBox = document.querySelector('.navbarHelpBox');



navbarCallBtn.addEventListener('click', ()=>{
    navbarHelpBox.classList.toggle('navbarHelpBoxDisplay');
})