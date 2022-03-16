// VARIABLES
const btnMenuOpen = document.querySelector('#btnMenuOpen');
const btnMenuClose = document.querySelector('#btnMenuClose');
const menuBar = document.querySelector('#menuBar');
const links = document.querySelector('#links');
const sliderDiv = document.querySelector('.product-container');
const slider = document.querySelector('.slider');
const btnSliderLeft = document.querySelector('#leftBtn');
const btnSliderRight = document.querySelector('#rightBtn');

//VARIABLES - FORM / CONTACT US
const btnSubmit = document.querySelector('#submit');

const formulario = document.querySelector('#form');

const inputName = document.querySelector('#name');
const email = document.querySelector('#email');
const textarea = document.querySelector('#comments');
const expresionRegular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const fielsBtn = document.querySelector('.fiels-btn');

//SECTION CONTACT US
// form.addEventListener('submit', validateForm);
formulario.addEventListener('submit', validateForm);




function validateForm(e){
    if(inputName.value.length == 0 || email.value.length == 0 || textarea.value.length == 0){
        e.preventDefault();
        errorMessage('There are empty fields.')
    }else if(expresionRegular.test(email.value)){
        e.preventDefault();
        submitEmail();
    }else{
        e.preventDefault();
        errorMessage('The email is not valid.')
    }

}

function errorMessage(message){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = message;
    mensajeError.classList.add('errorMessage');
    formulario.insertBefore(mensajeError, fielsBtn);
    setTimeout(() => {
        mensajeError.remove();
    }, 2500);
}

function submitEmail(){
    // e.preventDefault();
    setTimeout(() => {
        const messageSent = document.createElement('p');
        messageSent.textContent = 'Your message has been sent.';
        messageSent.classList.add('messageSent');
        
        formulario.insertBefore(messageSent, fielsBtn);
        
        setTimeout(() => {
            formulario.reset();
            messageSent.remove();
        }, 1500);
    }, 500);
}




//MENU RESPONSIVE
btnMenuOpen.addEventListener('click', () => {
    menuBar.classList.add('active');
    console.log(menuBar.classList);
});
btnMenuClose.addEventListener('click', ()=>{
    if(menuBar.classList.contains('active')){
        menuBar.classList.remove('active');
    }
});
links.addEventListener('click', ()=>{
    if(menuBar.classList.contains('active')){
        menuBar.classList.remove('active');
        menuBar.style.transitionDelay = '0.5s';
    }
})

//PRODUCTS SLIDER
btnSliderRight.addEventListener('click', ()=>{
    slider.scrollLeft += slider.offsetWidth; /*Cada vez que hago clic sobre el btn derecho va sumarle al container la parte total de la misma maedida de container que puede abarcar. De esta manera no va a abarcar más que el tamaño del container. */
    
    console.log(slider.offsetWidth);
});

btnSliderLeft.addEventListener('click', ()=>{
    slider.scrollLeft -= slider.offsetWidth;
});


//BTN TO GO TO TOP OF THE PAGE
const btnTop = document.querySelector('.btn-top');

btnTop.addEventListener('click', ()=>{
    window.scrollTo(0,0);
});


window.addEventListener('scroll', () =>{
    const scroll = document.documentElement.scrollTop;
    const fullSize = document.documentElement.offsetHeight;
    const sizeViewPort = document.documentElement.clientHeight;

    if(scroll > 100){
        btnTop.classList.add('show');
    }else{
        btnTop.classList.remove('show');
    }

    if(fullSize === (scroll + sizeViewPort)){
        btnTop.classList.add('scrollFinal');
    }else{
        btnTop.classList.remove('scrollFinal');
    }
})

//When you click on my logo, it will take you to the top of the page.
const home = document.querySelector('.home');
home.addEventListener('click', ()=>{
    window.scrollTo(0,0);
})