"use strict";

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


let oldScrollY = 0;
const menu = document.querySelector('.header');

window.addEventListener('scroll', scrollListener);

function scrollListener() {
    if(oldScrollY > window.scrollY){
        menu.classList.remove('header--hide');
    } else{
        menu.classList.add('header--hide');
    }
    oldScrollY = window.scrollY;
}


let character = document.querySelector('.app__character');
let message = document.querySelector('.app__message');
let movementEnabled = true;
let position = 0;

document.addEventListener('keydown', function(event){
    if(event.code === 'Space' && movementEnabled === true && position < 1200){
        event.preventDefault();
        position += 25;
        character.style.left = `${position}px`;

        if(position == 550){
            message.classList.add('appear');
            movementEnabled = false;
        };

        if(position == 575){
            message.classList.remove('appear');
        };
    };
});

document.addEventListener('keyup', function(event){
    if(event.code === 'Space' && movementEnabled === false){
        movementEnabled = true;
    };
});