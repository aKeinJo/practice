const $slideWrap = document.querySelector('.slide_wrap');
const $sildeContents = document.querySelector('.slide_contents');
const $slides = document.querySelectorAll('.slide');
const $prevBtn = document.querySelector('.slide_btn_prev');
const $nextBtn = document.querySelector('.slide_btn_next');

let slideIndex = 0;
let slideWidth = $sildeContents.clientWidth;
let maxSlide = $slides.length;

$prevBtn.addEventListener('click',() => {
    prevMove();
});

$nextBtn.addEventListener('click',() => {
    nextMove();
});

function prevMove(){
    if(slideIndex > 0){
        slideIndex--;
        const offset = slideWidth * slideIndex;

       $slides.forEach((i) => {
        i.setAttribute("style",`left:${-offset}px`);
        console.log(`function nextMove\ncurrentSlide : ${slideIndex}\nffset : ${offset}`)

        });

    } else {
        console.log(`function nextMove\ncurrentSlide : ${slideIndex}\nffset : ${offset}`)
        return;
    }
}

function nextMove(){
    slideIndex++;
    if(slideIndex <= maxSlide){

        const offset = slideWidth * slideIndex;

       $slides.forEach((i) => {
        i.setAttribute("style",`left:${-offset}px`);
        });

    } else {
        return;
    }
    
}