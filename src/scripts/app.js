"use strict";

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


// Sticky nav
let oldScrollY = 0;
const menu = document.querySelector('.header');

const mediaQuery = window.matchMedia('(min-width: 1024px)');

if (mediaQuery.matches) {
    window.addEventListener('scroll', scrollListener);
}

function scrollListener() {
    if (oldScrollY > window.scrollY) {
        menu.classList.remove('header--hide');
    } else {
        menu.classList.add('header--hide');
    }
    oldScrollY = window.scrollY;
}

mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
        window.addEventListener('scroll', scrollListener);
    } else {
        window.removeEventListener('scroll', scrollListener);
    }
});


// Burger menu
const menuToggle = document.querySelector('.menu--toggle');
const menuIcon = document.getElementById('menu-icon');

const navLinks = document.querySelectorAll('.menu a');

const svgMenu = `<path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>`;
const svgClose = `<path d="M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z"/>`;

if(menuToggle){
    menuToggle.addEventListener('click', menuOpen);
}

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

function menuOpen() {
    document.body.classList.toggle('menu--open');
    
    let menuOpen = document.body.classList.contains('menu--open');

    if (menuOpen) {
        menuIcon.innerHTML = svgClose;
    } else {
        menuIcon.innerHTML = svgMenu;
    }
}

function closeMenu() {
    document.body.classList.remove('menu--open');
    menuIcon.innerHTML = svgMenu;
}


// Button top
window.addEventListener('scroll', function(){
    const button = document.querySelector('.top');

    if(button){
        if (window.scrollY > 250) {
            button.classList.remove('top--hide');
            button.classList.add('top--show');
        } else {
            button.classList.remove('top--show');
            button.classList.add('top--hide');
        }
    }
});


// Character's script
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