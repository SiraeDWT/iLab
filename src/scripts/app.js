"use strict";
console.clear();

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);


const toggleButton = document.getElementById('toggleMode');
const htmlElement = document.documentElement;


function toggleTheme(){
    const currentTheme = htmlElement.getAttribute('data-bs-theme');

    if(currentTheme === 'light'){
        htmlElement.setAttribute('data-bs-theme', 'dark');
        toggleButton.textContent = 'Light Mode';
    } else{
        htmlElement.setAttribute('data-bs-theme', 'light');
        toggleButton.textContent = 'Dark Mode';
    }
}

toggleButton.addEventListener('click', toggleTheme);