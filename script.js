//////////////// HEADER ////////////////
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.toggle('show', entry.isIntersecting);
        } else {
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const nav = document.querySelector('nav');




window.addEventListener('scroll',() =>{
    let getscroll = window.scrollY;
    console.log(getscroll);
    switch (true){
        case (getscroll >= 905) && (getscroll <= 1699) :
            nav.classList.add('active_nav_1');
            nav.classList.remove('active_nav_2');
            nav.classList.remove('active_nav_3');
            break;
        case (getscroll >= 1956) && (getscroll <= 2899 ):
            nav.classList.add('active_nav_2');
            nav.classList.remove('active_nav_1');
            nav.classList.remove('active_nav_3');
            break;
        case (getscroll >= 1900 ):
            nav.classList.add('active_nav_3');
            nav.classList.remove('active_nav_1');
            nav.classList.remove('active_nav_2');
            break;

        default:
            nav.classList.remove('active_nav_1');
            nav.classList.remove('active_nav_2');
            nav.classList.remove('active_nav_3');
            break;
    }
})

//////////////// Pop up windows ////////////////
// Buttons Variables
let buttonPuissance4 = document.getElementById("button-puissance4");
let buttonBeepsong = document.getElementById("button-beepsong");
let buttonPiano = document.getElementById("button-virtualPiano");
let buttonDevis = document.getElementById("button-Devis");
let buttonCV = document.getElementById("button-CV");
let close = document.getElementsByClassName("close-window");

//Popup Variables
let popup1 = document.getElementById("project1-popup");
let popup2 = document.getElementById("project2-popup");
let popup3 = document.getElementById("project3-popup");
let popup4 = document.getElementById("project4-popup");
let popup5 = document.getElementById("project5-popup");
let blur = document.getElementById("blur");
let scroll = document.getElementById("stopScroll");


//Function
function toggleBlur(){
    blur.classList.toggle("active");
    scroll.classList.toggle("active");
}

function hidePopup() {
    toggleBlur();
    popup1.classList.remove("active");
    popup2.classList.remove("active");
    popup3.classList.remove("active");
    popup4.classList.remove("active");
    popup5.classList.remove("active");
}

//onclick trigger
buttonPuissance4.addEventListener("click",() => {
    toggleBlur();
    popup1.classList.toggle("active");
});
buttonBeepsong.addEventListener("click",() =>{
    toggleBlur();
    popup2.classList.toggle("active");
});

buttonPiano.addEventListener("click",() =>{
    toggleBlur();
    popup3.classList.toggle("active");
});

buttonDevis.addEventListener("click",() =>{
    toggleBlur();
    popup4.classList.toggle("active");
});

buttonCV.addEventListener("click",() =>{
    toggleBlur();
    popup5.classList.toggle("active");
});

Array.from(close).forEach(function(element) {
    element.addEventListener('click', () =>{
        hidePopup();
    });
});





